import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Package, Thermometer } from "lucide-react";
import { FREIGHT_RATES, CONTINENTS } from "@/data/freightRates";
import { CONTAINER_DETAILS_CHANCAY } from "@/data/containerDetailsChancay";
import { CONTAINER_DETAILS_CALLAO } from "@/data/containerDetailsCallao";
import { CONTAINER_DETAILS_PAITA } from "@/data/containerDetailsPaita";
import { Container3D } from "@/components/Container3D";
import { CONTAINER_SPECS } from "@/data/containerSpecs";

export const ContainerPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("Todos");

  const containerTypes = [
    { name: "CONTENEDOR DRY-VAN 20'", icon: Package },
    { name: "CONTENEDOR DRY-VAN 40'", icon: Package },
    { name: "CONTENEDOR REEFER 20'", icon: Thermometer },
    { name: "CONTENEDOR REEFER 40'", icon: Thermometer },
  ];

  const COUNTRY_LIST = [...new Set(FREIGHT_RATES.map((r) => r.country))];

  const [selectedCountries, setSelectedCountries] = useState<string[]>(
    containerTypes.map(() => "")
  );
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(
    containerTypes.map(() => "")
  );

  const getFilteredCountries = (query: string) => {
    const normalized = query.toLowerCase().trim();

    return normalized
      ? COUNTRY_LIST.filter((c) =>
          c.toLowerCase().includes(normalized)
        ).sort()
      : COUNTRY_LIST;
  };

  const filteredRates = FREIGHT_RATES.filter((rate) => {
    const matchSearch =
      rate.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rate.port.toLowerCase().includes(searchTerm.toLowerCase());

    return (
      matchSearch &&
      (selectedContinent === "Todos" ||
        rate.continent === selectedContinent)
    );
  });

  const handleOpenTariff = (idx: number, containerName: string) => {
    const origin = selectedCountries[idx];
    const destination = selectedDestinations[idx];

    const dataset =
      destination === "Chancay"
        ? CONTAINER_DETAILS_CHANCAY
        : destination === "Callao"
        ? CONTAINER_DETAILS_CALLAO
        : destination === "Paita"
        ? CONTAINER_DETAILS_PAITA
        : [];

    const match = dataset.find(
      (d) => d.pais === origin && d.destino === destination
    );

    if (!match) return alert("⚠️ No hay tarifas registradas.");

    const isReefer = containerName.includes("REEFER");
    const size20 = containerName.includes("20");

    const url = size20
      ? isReefer
        ? match.tarifas.ref20
        : match.tarifas.dry20
      : isReefer
      ? match.tarifas.ref40
      : match.tarifas.dry40;

    if (url?.startsWith("http")) window.open(url, "_blank");
    else alert("⚠️ Enlace no disponible.");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="text-center px-2">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
            Contenedores Marítimos
          </h1>
          <p className="text-gray-600 mt-2">
            Selecciona un contenedor, país de origen y destino.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {containerTypes.map((container, idx) => {
            const Icon = container.icon;
            const tech = CONTAINER_SPECS.find(
              (c) => c.type === container.name
            );

            return (
              <Card key={idx} className="p-5 shadow-lg rounded-xl">
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="text-teal-500 w-7 h-7" />
                  <h2 className="font-bold">{container.name}</h2>
                </div>

                {/* 🔥 NUEVO: ETIQUETAS */}
                <div className="flex gap-2 mb-3">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      container.name.includes("REEFER")
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {container.name.includes("REEFER") ? "Refrigerado" : "Dry"}
                  </span>

                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-200 text-gray-600">
                    {container.name.includes("20") ? "20´" : "40´"}
                  </span>
                </div>

                <Container3D
                  type={container.name.includes("20") ? "20" : "40"}
                  isReefer={container.name.includes("REEFER")}
                />

                <div className="mt-4 bg-gray-100 p-3 rounded-lg text-sm">
                  <p><strong>Peso vacío:</strong> {tech?.weightEmpty}</p>
                  <p><strong>Peso máximo:</strong> {tech?.weightMax}</p>
                  <p className="font-semibold mt-2">Dimensiones:</p>
                  <ul className="ml-4">
                    <li>📦 <strong>Externo:</strong> {tech?.dimensions.externo.largo} × {tech?.dimensions.externo.ancho} × {tech?.dimensions.externo.alto}</li>
                    <li>📦 <strong>Interno:</strong> {tech?.dimensions.interno.largo} × {tech?.dimensions.interno.ancho} × {tech?.dimensions.interno.alto}</li>
                    <li>🚪 <strong>Puerta:</strong> {tech?.dimensions.puertas.ancho} × {tech?.dimensions.puertas.alto}</li>
                  </ul>
                  <p className="mt-2"><strong>Volumen:</strong> {tech?.volumen}</p>
                  {tech?.temperatura && (
                    <p><strong>Temp:</strong> {tech.temperatura}</p>
                  )}
                </div>

                <label className="mt-4 block font-semibold">
                  País origen
                </label>

                <Input
                  placeholder="Ejemplo: Japón"
                  value={selectedCountries[idx]}
                  onChange={(e) => {
                    const updated = [...selectedCountries];
                    updated[idx] = e.target.value;
                    setSelectedCountries(updated);
                  }}
                />

                {selectedCountries[idx] &&
                  !COUNTRY_LIST.includes(selectedCountries[idx]) && (
                    <div className="border p-2 mt-2 rounded-md max-h-40 overflow-auto">
                      {getFilteredCountries(selectedCountries[idx]).map(
                        (country) => (
                          <button
                            key={country}
                            className="block w-full text-left hover:bg-gray-200 p-1"
                            onClick={() => {
                              const updated = [...selectedCountries];
                              updated[idx] = country;
                              setSelectedCountries(updated);
                            }}
                          >
                            {country}
                          </button>
                        )
                      )}
                    </div>
                  )}

                <label className="mt-4 block font-semibold">
                  Puerto destino
                </label>

                <div className="flex gap-2 mt-2">
                  {["Callao", "Chancay", "Paita"].map((port) => (
                    <button
                      key={port}
                      className={`px-3 py-2 rounded-md flex-1 ${
                        selectedDestinations[idx] === port
                          ? "bg-teal-600 text-white"
                          : "bg-gray-200"
                      }`}
                      onClick={() => {
                        const updated = [...selectedDestinations];
                        updated[idx] = port;
                        setSelectedDestinations(updated);
                      }}
                    >
                      {port}
                    </button>
                  ))}
                </div>

                <button
  className="mt-4 w-full py-2.5 rounded-lg font-semibold text-sm sm:text-base 
  transition-all duration-200 flex items-center justify-center gap-2
  bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg scale-[1.01]"
  onClick={() => handleOpenTariff(idx, container.name)}
>
  Ver tarifas →
</button>

              </Card>
            );
          })}
        </div>

        <Card className="p-5">
          <h2 className="font-bold text-xl mb-4">Tarifas internacionales</h2>

          <div className="flex gap-3 mb-4">
            <Input
              placeholder="Buscar país o puerto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Select value={selectedContinent} onValueChange={setSelectedContinent}>
              <SelectTrigger className="w-56">
                <SelectValue placeholder="Continente" />
              </SelectTrigger>
                <SelectContent className="bg-white border border-gray-200 shadow-lg">
                {CONTINENTS.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="overflow-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2">País</th>
                  <th className="p-2">Puerto</th>
                  <th className="p-2 text-center">FOB 20</th>
                  <th className="p-2 text-center">FOB 40</th>
                  <th className="p-2 text-center">CIF 20</th>
                  <th className="p-2 text-center">CIF 40</th>
                  <th className="p-2">Continente</th>
                </tr>
              </thead>
              <tbody>
                {filteredRates.map((rate, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-2">{rate.country}</td>
                    <td className="p-2">{rate.port}</td>
                    <td className="p-2 text-center">${rate.fob20}</td>
                    <td className="p-2 text-center">${rate.fob40}</td>
                    <td className="p-2 text-center">${rate.cif20}</td>
                    <td className="p-2 text-center">${rate.cif40}</td>
                    <td className="p-2">{rate.continent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};
