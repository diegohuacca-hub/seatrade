import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import * as turf from '@turf/turf';
import 'mapbox-gl/dist/mapbox-gl.css';
import { PERU_PORTS, WORLD_PORTS, type Port } from '@/data/ports';
import { COUNTRY_INFO } from '@/data/countryInfo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Search, X, Map as MapIcon, Globe2, Anchor, ArrowRight } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion, AnimatePresence } from 'framer-motion';

const MAPBOX_TOKEN =
  'pk.eyJ1IjoieW9zaHVlZDEtIiwiYSI6ImNtZ2NjYXhwbzE2djYya3BuaDdqY3VjY3QifQ.Z5Kq016IqKa-EQHDWYjt0A';

export const MapPage = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const [mapType, setMapType] = useState<'3d' | '2d'>('3d');
  const [originPort, setOriginPort] = useState<string>('callao');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedPort, setSelectedPort] = useState<Port | null>(null);
  const [routeData, setRouteData] = useState<any>(null);
  const [currentRouteKey, setCurrentRouteKey] = useState(0);

  const normalizeText = (text: string) =>
    text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  // Filtrado de puertos solo si se ingresa al menos 1 caracter
  const filteredPorts = searchTerm.trim().length > 0
    ? WORLD_PORTS.filter((port) => {
        const term = normalizeText(searchTerm.trim());
        const country = normalizeText(port.country);
        const name = normalizeText(port.name);

        return country.includes(term) || name.includes(term);
      }).sort((a, b) => {
        const term = normalizeText(searchTerm.trim());

        const aName = normalizeText(a.name);
        const bName = normalizeText(b.name);
        const aCountry = normalizeText(a.country);
        const bCountry = normalizeText(b.country);

        const aStarts = aName.startsWith(term) || aCountry.startsWith(term);
        const bStarts = bName.startsWith(term) || bCountry.startsWith(term);

        if (aStarts && !bStarts) return -1;
        if (!aStarts && bStarts) return 1;

        return aName.localeCompare(bName);
      })
    : [];

  // Inicialización del mapa
  useEffect(() => {
    if (!mapContainer.current || map.current) return;
    mapboxgl.accessToken = MAPBOX_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      projection: mapType === '3d' ? 'globe' : 'mercator',
      center: mapType === '3d' ? [0, 90] : [-77.1474, -12.0464], // Polo Norte / Perú
      zoom: mapType === '3d' ? 1.5 : 2,
      pitch: 0,
      bearing: 0,
      attributionControl: false
    });

    map.current.addControl(
      new mapboxgl.NavigationControl({ visualizePitch: true }),
      'bottom-right'
    );

    map.current.on('load', () => {
      // Marcadores de puertos peruanos (origen)
      PERU_PORTS.forEach((port) => {
        const el = document.createElement('div');
        el.className = 'port-marker-origin';
        el.style.cssText =
          'width: 16px; height: 16px; background: #D97706; border: 2px solid white; border-radius: 50%; cursor: pointer; box-shadow: 0 0 10px rgba(217, 119, 6, 0.8);';
        new mapboxgl.Marker(el)
          .setLngLat(port.coordinates)
          .setPopup(
            new mapboxgl.Popup().setHTML(
              `<strong>${port.name}</strong><br/>${port.country}`
            )
          )
          .addTo(map.current!);
      });

      // Marcadores de puertos destino
      WORLD_PORTS.forEach((port) => {
        const el = document.createElement('div');
        el.className = 'port-marker-destination';
        el.style.cssText =
          'width: 10px; height: 10px; background: #0EA5E9; border: 1px solid white; border-radius: 50%; cursor: pointer;';
        el.addEventListener('click', () => handlePortClick(port));
        new mapboxgl.Marker(el)
          .setLngLat(port.coordinates)
          .setPopup(
            new mapboxgl.Popup().setHTML(
              `<strong>${port.name}</strong><br/>${port.country}`
            )
          )
          .addTo(map.current!);
      });
    });

    return () => map.current?.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Cambiar tipo de mapa (2D / 3D)
  useEffect(() => {
    if (map.current) {
      map.current.setProjection(mapType === '3d' ? 'globe' : 'mercator');
      map.current.setPitch(0);
      map.current.setBearing(0);
      if (mapType === '3d') {
        map.current.easeTo({ center: [0, 90], zoom: 1.5, duration: 1000 });
      }
    }
  }, [mapType]);

  const showRoute = (destinationPort: Port, origin: Port) => {
    if (!map.current) return;

    // Eliminar ruta anterior si existe
    if (map.current.getSource('routeLine')) {
      if (map.current.getLayer('routeLayer')) {
        map.current.removeLayer('routeLayer');
      }
      map.current.removeSource('routeLine');
    }

    const start = turf.point(origin.coordinates);
    const end = turf.point(destinationPort.coordinates);
    const distance = Math.round(turf.distance(start, end));

    // Crear línea geodésica curva
    const route = turf.greatCircle(start, end);

    // Dibujar línea en Mapbox
    map.current.addSource('routeLine', {
      type: 'geojson',
      data: route
    });

    map.current.addLayer({
      id: 'routeLayer',
      type: 'line',
      source: 'routeLine',
      paint: {
        'line-color': '#00E0FF',
        'line-width': 4,
        'line-opacity': 0.85
      }
    });

    // Ajustar zoom automáticamente
    const bounds = new mapboxgl.LngLatBounds();
    route.geometry.coordinates.forEach((coord: any) => bounds.extend(coord));
    map.current.fitBounds(bounds, { padding: 80 });

    // Guardar info en estado
    const countryInfo = COUNTRY_INFO[destinationPort.country];
    const estimatedDays =
      countryInfo?.estimatedDays?.[originPort as 'callao' | 'paita' | 'chancay'];

    setRouteData({
      origin,
      destination: destinationPort,
      distance,
      countryInfo,
      estimatedDays
    });
  };

  const handlePortClick = (destinationPort: Port) => {
    const origin = PERU_PORTS.find((p) =>
      p.name.toLowerCase().includes(originPort.toLowerCase())
    );
    if (!origin || !map.current) return;

    setSelectedPort(destinationPort);

    // Ocultar filtros y sugerencias al seleccionar puerto
    setShowFilters(false);
    setShowSuggestions(false);

    // Cambiar key para animación de salida/entrada
    setCurrentRouteKey((prev) => prev + 1);

    showRoute(destinationPort, origin);
  };

  const handleSearch = () => {
    if (filteredPorts.length > 0) handlePortClick(filteredPorts[0]);
  };

  return (
    <div className="relative w-full h-screen">
      <div ref={mapContainer} className="absolute inset-0" />

      {/* Panel buscador + filtros */}
      <Card className="absolute top-4 left-4 w-80 bg-card/95 backdrop-blur-sm border-primary/20 shadow-elegant z-10 space-y-2 p-4">
        <div className="flex items-center gap-2">
          <Input
            placeholder="Buscar por país o puerto..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setShowSuggestions(true);
            }}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            onFocus={() => {
              setShowFilters(true);
              // Si hay una ruta ya mostrada, ocultarla al empezar nueva búsqueda
              if (routeData) {
                setCurrentRouteKey((prev) => prev + 1);
                setRouteData(null);
              }
            }}
            className="flex-1 bg-background border-border"
          />
          <Button onClick={handleSearch} className="p-2">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {showFilters && (
          <div className="mt-2 space-y-2">
            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Anchor className="h-4 w-4 text-accent" /> Puerto de Origen
              </label>
              <Select value={originPort} onValueChange={setOriginPort}>
                <SelectTrigger className="w-full bg-background border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="callao">Puerto del Callao</SelectItem>
                  <SelectItem value="paita">Puerto de Paita</SelectItem>
                  <SelectItem value="chancay">Puerto de Chancay</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1">
              <label className="text-sm font-medium text-foreground flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-secondary" /> Tipo de Mapa
              </label>
              <Select
                value={mapType}
                onValueChange={(v) => setMapType(v as '3d' | '2d')}
              >
                <SelectTrigger className="w-full bg-background border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-popover border-border">
                  <SelectItem value="3d">Mapa 3D</SelectItem>
                  <SelectItem value="2d">Mapa 2D</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {searchTerm.length > 0 && showSuggestions && (
          <div className="mt-2 bg-card rounded-lg border border-border shadow-md max-h-48 overflow-y-auto">
            {filteredPorts.length > 0 ? (
              filteredPorts.map((port, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePortClick(port)}
                  className="w-full text-left p-2 hover:bg-muted text-sm transition-colors"
                >
                  <strong className="block text-foreground">
                    {port.country}
                  </strong>
                  <span className="text-xs text-muted-foreground">
                    {port.name}
                  </span>
                </button>
              ))
            ) : (
              <p className="text-center text-sm text-muted-foreground py-3">
                Sin resultados...
              </p>
            )}
          </div>
        )}
      </Card>



















      {/* Card de ruta */}
      <AnimatePresence>
        {routeData && (
          <motion.div
            key={currentRouteKey}
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -400, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 120 }}
            className="absolute top-20 left-4 w-80 max-h-[calc(100%-80px)] bg-card/95 backdrop-blur-sm border-primary/20 shadow-elegant z-20 overflow-y-auto"
          >
            <div className="p-4 space-y-4 relative">
              <Button
                variant="ghost"
                className="absolute top-2 right-2 p-1"
                onClick={() => setRouteData(null)}
              >
                <X className="h-4 w-4" />
              </Button>

              <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                {routeData.countryInfo?.bandera ? (
                  <img
                    src={routeData.countryInfo.bandera}
                    alt={`Bandera de ${routeData.destination.country}`}
                    className="w-9 h-6 rounded shadow-md border"
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <MapIcon className="h-5 w-5 text-accent" />
                )}
                Información de Ruta
              </h3>

              {/* Contenido de la card */}
              <div className="space-y-2 text-sm md:text-base">
                <div className="p-2 bg-muted/50 rounded-lg">
                  <span className="font-medium">Puerto de Origen</span>
                  <p className="font-semibold">{routeData.origin.name}</p>
                </div>

                {/* Puerto de Destino */}
                <div className="p-2 bg-muted/50 rounded-lg">
                  <span className="font-medium block">Puerto de Destino</span>
                  <p className="font-semibold">
                    {routeData.destination.name}, {routeData.destination.country}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-accent/10 rounded-lg text-center">
                    <span className="font-medium block">Distancia</span>
                    <p className="font-bold text-lg">
                      {routeData.distance.toLocaleString()} km
                    </p>
                  </div>

                  {routeData.estimatedDays && (
                    <div className="p-2 bg-secondary/10 rounded-lg text-center">
                      <span className="font-medium block">Tiempo Est</span>
                      <p className="font-bold text-lg">
                        {routeData.estimatedDays} días
                      </p>
                    </div>
                  )}
                </div>






{/* Información adicional: Links + Idioma */}
{routeData.countryInfo && (
  <div className="space-y-1 pt-2 border-t border-border">

    {/* 1️⃣ Ficha País */}
    {routeData.countryInfo.fichaUrl && (
      <a
        href={routeData.countryInfo.fichaUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-between text-xs md:text-sm border-primary/50 hover:bg-primary/10"
        >
          📘 Ficha País
        </Button>
      </a>
    )}

    {/* 2️⃣ Doing Business */}
    {routeData.countryInfo.doingBusinessUrl && (
      <a
        href={routeData.countryInfo.doingBusinessUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-between text-xs md:text-sm border-secondary/50 hover:bg-secondary/10"
        >
          ⚖️ Doing Business
        </Button>
      </a>
    )}

    

    {/* 3️⃣ Tratados de Libre Comercio */}
    {routeData.countryInfo.tlc && (
      <a
        href={routeData.countryInfo.tlc}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          size="sm"
          className="w-full justify-between text-xs md:text-sm border-blue-600/60 hover:bg-blue-600/10"
        >
          🌍 Tratados de Libre Comercio
        </Button>
      </a>
    )}

    {/* 4️⃣ Reporte de Comercio Bilateral */}
    <a
      href="https://consultasenlinea.mincetur.gob.pe/Rep_Comer_Bilat/Comercio"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        variant="outline"
        size="sm"
        className="w-full justify-between text-xs md:text-sm border-emerald-500/50 hover:bg-emerald-500/10"
      >
        📊 Reporte de Comercio Bilateral
      </Button>
    </a>

    {/* Idioma */}
    {routeData.countryInfo.idioma && (
      <div className="text-xs md:text-sm text-muted-foreground">
        <span className="font-medium">Idioma: </span>
        {routeData.countryInfo.idioma.join(', ')}
      </div>
    )}
  </div>
)}
{/* Moneda + Tipo de Cambio */}
{routeData.countryInfo.currency && (
  <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground pt-1">
    <div>
      <span className="font-medium">Moneda: </span>
      {routeData.countryInfo.currency.name} ({routeData.countryInfo.currency.symbol})
    </div>

    {/* Botón de tipo de cambio al lado */}
    <a
      href={`https://www.google.com/search?q=${routeData.countryInfo.currency.code}+a+sol+peruano`}
      target="_blank"
      rel="noopener noreferrer"
      className="ml-2"
    >
      <button className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition text-xs">
        💱 Ver Cambio
      </button>
    </a>
  </div>
)}







                

                {/* Cómo negociar / no negociar */}
                {(routeData.countryInfo?.comoNegociar ||
                  routeData.countryInfo?.comoNoNegociar) && (
                  <div className="space-y-1 pt-2 border-t border-border">
                    {routeData.countryInfo?.comoNegociar && (
                      <div className="p-2 bg-green-500/10 rounded-lg border border-green-500/20">
                        <p className="font-semibold text-green-700 text-xs md:text-sm mb-1">
                          ✓ Cómo Negociar:
                        </p>
                        <p className="text-xs md:text-sm">
                          {routeData.countryInfo.comoNegociar}
                        </p>
                      </div>
                    )}
                    {routeData.countryInfo?.comoNoNegociar && (
                      <div className="p-2 bg-red-500/10 rounded-lg border border-red-500/20">
                        <p className="font-semibold text-red-700 text-xs md:text-sm mb-1">
                          ✗ Cómo No Negociar:
                        </p>
                        <p className="text-xs md:text-sm">
                          {routeData.countryInfo.comoNoNegociar}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <a
                  href="https://www.searates.com/es/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="default"
                    size="sm"
                    className="w-full bg-primary hover:bg-primary/90 mt-2"
                  >
                    Ver Detalles en SeaRates
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón para volver a mostrar la card con icono apuntando a la derecha */}
      {!routeData && selectedPort && (
        <Button
          variant="secondary"
          className="absolute top-24 left-4 z-20 p-2 rounded-full"
          onClick={() => {
            const origin = PERU_PORTS.find((p) =>
              p.name.toLowerCase().includes(originPort.toLowerCase())
            );
            if (!origin || !selectedPort) return;

            const start = turf.point(origin.coordinates);
            const end = turf.point(selectedPort.coordinates);
            const distance = Math.round(turf.distance(start, end));
            const countryInfo = COUNTRY_INFO[selectedPort.country];
            const estimatedDays =
              countryInfo?.estimatedDays?.[
                originPort as 'callao' | 'paita' | 'chancay'
              ];

            setRouteData({
              origin,
              destination: selectedPort,
              distance,
              countryInfo,
              estimatedDays
            });
          }}
        >
          <ArrowRight className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};
