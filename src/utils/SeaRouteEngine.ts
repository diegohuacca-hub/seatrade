import * as turf from "@turf/turf";
import { type Port } from "@/data/ports";

type Coord = [number, number];

interface SeaNode {
  name: string;
  coord: Coord;
}

/* ---------------------------------------------------------
   🌍 NODOS ESTRATÉGICOS MARÍTIMOS DEL MUNDO
--------------------------------------------------------- */
export const SEA_NODES: SeaNode[] = [
  { name: "Panama Canal", coord: [-79.95, 9.08] },
  { name: "Suez Canal", coord: [32.35, 30.0] },
  { name: "Gibraltar", coord: [-5.35, 35.95] },
  { name: "Cape of Good Hope", coord: [18.48, -34.35] },
  { name: "Strait of Malacca", coord: [103.6, 3.9] },
  { name: "North Atlantic", coord: [-30, 40] },
  { name: "South Pacific", coord: [-150, -10] },
  { name: "North Pacific", coord: [-160, 45] },
  { name: "Indian Ocean", coord: [70, -10] },
  // Nodo genérico para "Pacific" (para reglas Asia → América)
  { name: "Pacific", coord: [-140, 0] },
];

/* ---------------------------------------------------------
   📍 DETECCIÓN DE REGIONES PARA RUTAS
--------------------------------------------------------- */
export function getRegion([lng, lat]: Coord): string {
  if (lat > 60) return "Polar";
  if (lat < -35) return "Sur";
  if (lng < -30 && lng > -150) return "America";
  if (lng > -30 && lng < 60) return "EuropaAfrica";
  if (lng > 60 && lng < 150) return "Asia";
  return "Oceano";
}

/* ---------------------------------------------------------
   🎯 SELECCIÓN DE PASOS OBLIGATORIOS SEGÚN REGIONES
--------------------------------------------------------- */
export function getMandatoryCheckpoints(start: Port, end: Port): string[] {
  const r1 = getRegion(start.coordinates);
  const r2 = getRegion(end.coordinates);

  const checkpoints: string[] = [];

  // PACÍFICO → ATLÁNTICO
  if (r1 === "America" && r2 === "EuropaAfrica") {
    checkpoints.push("Panama Canal", "North Atlantic");
  }
  if (r1 === "America" && r2 === "Asia") {
    checkpoints.push("Panama Canal", "Strait of Malacca");
  }

  // ASIA → EUROPA
  if (r1 === "Asia" && r2 === "EuropaAfrica") {
    checkpoints.push(
      "Strait of Malacca",
      "Indian Ocean",
      "Suez Canal",
      "Gibraltar"
    );
  }

  // ASIA → AMÉRICA
  if (r1 === "Asia" && r2 === "America") {
    checkpoints.push("Strait of Malacca", "Pacific");
  }

  // EUROPA → AMÉRICA
  if (r1 === "EuropaAfrica" && r2 === "America") {
    checkpoints.push("Gibraltar", "North Atlantic");
  }

  // SI NINGUNA COINCIDE → PAR RUTAS OCEÁNICAS INTERMEDIAS
  if (checkpoints.length === 0) {
    checkpoints.push("North Atlantic", "Indian Ocean");
  }

  return checkpoints;
}

/* ---------------------------------------------------------
   🧠 FUNCIÓN: OBTENER NODO MÁS CERCANO
--------------------------------------------------------- */
export function getClosestSeaNode(port: Port): SeaNode {
  let best = SEA_NODES[0];
  let minDist = Number.POSITIVE_INFINITY;

  const portPoint = turf.point(port.coordinates);

  SEA_NODES.forEach((node) => {
    const d = turf.distance(portPoint, turf.point(node.coord));
    if (d < minDist) {
      minDist = d;
      best = node;
    }
  });

  return best;
}

/* ---------------------------------------------------------
   🛳 GENERADOR DE RUTA MARÍTIMA REALISTA
--------------------------------------------------------- */
export function generateSeaRoute(
  origin: Port,
  destination: Port
): turf.Feature<turf.LineString> {
  const checkpointsNames = getMandatoryCheckpoints(origin, destination);

  // 1) Convertir nombres de checkpoints en nodos, con type guard para TS
  const checkpointNodes: SeaNode[] = checkpointsNames
    .map((name) => SEA_NODES.find((n) => n.name === name))
    .filter((node): node is SeaNode => !!node);

  // 2) Extraer solo coordenadas de esos nodos
  const checkpointCoords: Coord[] = checkpointNodes.map((n) => n.coord);

  // 3) Construir el path completo (solo Coord válidas)
  const path: Coord[] = [
    origin.coordinates,
    getClosestSeaNode(origin).coord,
    ...checkpointCoords,
    getClosestSeaNode(destination).coord,
    destination.coordinates,
  ];

  // 4) Generar segmentos curvos realistas con greatCircle
  const finalCoords: Coord[] = [];

  for (let i = 0; i < path.length - 1; i++) {
    const segment = turf.greatCircle(path[i], path[i + 1], { steps: 90 });
    // segment.geometry.coordinates es Coord[]
    finalCoords.push(
      ...(segment.geometry.coordinates as Coord[])
    );
  }

  return turf.lineString(finalCoords);
}
