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

  /** ==========================
   * 🧠 Búsqueda inteligente
   ============================*/
  const getFilteredCountries = (query: string) => {
    const normalized = query.toLowerCase().trim();

    const sorted = [...COUNTRY_LIST].sort((a, b) => {
      const aStarts = a.toLowerCase().startsWith(normalized);
      const bStarts = b.toLowerCase().startsWith(normalized);

      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;

      return a.localeCompare(b);
    });

    return normalized
      ? sorted.filter((c) => c.toLowerCase().includes(normalized))
      : sorted;
  };

  /** ==========================
   * 📄 Tabla de tarifas
   ============================*/
  const filteredRates = FREIGHT_RATES.filter((rate) => {
    const matchSearch =
      rate.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rate.port.toLowerCase().includes(searchTerm.toLowerCase());

    const matchContinent =
      selectedContinent === "Todos" || rate.continent === selectedContinent;

    return matchSearch && matchContinent;
  });

  /** ==========================
   * 🚢 Abrir tarifa real por contenedor
   ============================*/
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

    if (!match) return alert("⚠️ No hay tarifas registradas aún para esa ruta.");

    const isReefer = containerName.includes("REEFER");
    const size20 = containerName.includes("20");

    const url = size20
      ? isReefer
        ? match.tarifas.ref20
        : match.tarifas.dry20
      : isReefer
      ? match.tarifas.ref40
      : match.tarifas.dry40;

    const cleanUrl = url?.trim();

    if (cleanUrl && cleanUrl.startsWith("http")) {
      window.open(cleanUrl, "_blank");
    } else {
      alert("⚠️ Enlace inválido o no disponible.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* ================= HEADER ================= */}
        <header className="text-center px-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
            Contenedores Marítimos
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto">
            Selecciona un contenedor, país de origen y puerto destino en Perú.
          </p>
        </header>

        {/* ================= TARJETAS DE CONTENEDORES ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {containerTypes.map((container, idx) => {
            const Icon = container.icon;

            return (
              <Card
                key={idx}
                className="p-4 sm:p-6 shadow-lg rounded-2xl bg-white flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="text-teal-500 w-7 h-7 sm:w-8 sm:h-8" />
                  <h2 className="font-bold text-base sm:text-lg">
                    {container.name}
                  </h2>
                </div>

                {/* 3D */}
                <div className="w-full flex justify-center mb-2">
                  <div className="w-full max-w-xs sm:max-w-sm">
                    <Container3D
                      type={container.name.includes("20") ? "20" : "40"}
                      isReefer={container.name.includes("REEFER")}
                    />
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-500 text-center mb-2">
                  Rotar / Zoom
                </p>

                {/* País origen */}
                <label className="block mt-2 font-semibold text-xs sm:text-sm">
                  País de origen
                </label>
                <Input
                  className="mt-1 text-sm"
                  placeholder="Ejemplo: A → Argentina"
                  value={selectedCountries[idx]}
                  onChange={(e) => {
                    const updated = [...selectedCountries];
                    updated[idx] = e.target.value;
                    setSelectedCountries(updated);
                  }}
                />

                {/* Sugerencias país (scrollable y responsivo) */}
                {selectedCountries[idx] &&
                  !COUNTRY_LIST.includes(selectedCountries[idx]) && (
                    <div className="mt-2 max-h-40 overflow-y-auto border rounded-md">
                      {getFilteredCountries(selectedCountries[idx]).map(
                        (country) => (
                          <button
                            key={country}
                            className="w-full text-left px-3 py-1 hover:bg-gray-100 text-xs sm:text-sm"
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

                {/* Botones puerto destino */}
                <label className="block mt-4 font-semibold text-xs sm:text-sm">
                  Puerto destino en Perú
                </label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Callao", "Chancay", "Paita"].map((port) => (
                    <button
                      key={port}
                      className={`flex-1 min-w-[90px] px-3 py-2 rounded-md text-xs sm:text-sm ${
                        selectedDestinations[idx] === port
                          ? "bg-teal-600 text-white"
                          : "bg-gray-200 text-gray-800"
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

                {/* Botón CTA */}
                <button
                  onClick={() => handleOpenTariff(idx, container.name)}
                  className="mt-5 bg-blue-600 hover:bg-blue-700 text-white w-full py-2.5 rounded-lg font-semibold text-sm sm:text-base transition"
                >
                  Ver tarifas →
                </button>
              </Card>
            );
          })}
        </div>

        {/* ================= TABLA TARIFARIA ================= */}
        <Card className="p-4 sm:p-6">
          <h2 className="font-bold text-lg sm:text-xl mb-4">
            Tarifas Internacionales
          </h2>

          {/* Filtros responsivos */}
          <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row sm:items-center mb-4">
            <Input
              placeholder="Buscar país o puerto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="text-sm sm:text-base"
            />
            <Select value={selectedContinent} onValueChange={setSelectedContinent}>
  <SelectTrigger className="w-full sm:w-52 text-sm sm:text-base bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500">
    <SelectValue placeholder="Continente" />
  </SelectTrigger>

  <SelectContent className="bg-white border border-gray-300 shadow-lg">
    {CONTINENTS.map((c) => (
      <SelectItem key={c} value={c}>
        {c}
      </SelectItem>
    ))}
  </SelectContent>
</Select>

          </div>

          {/* Tabla con scroll horizontal en móviles */}
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[720px]">
              <thead className="bg-gray-100 text-xs sm:text-sm">
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

              <tbody className="text-xs sm:text-sm">
                {filteredRates.map((rate, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-2 whitespace-nowrap">{rate.country}</td>
                    <td className="p-2 whitespace-nowrap">{rate.port}</td>
                    <td className="p-2 text-center whitespace-nowrap">
                      ${rate.fob20}
                    </td>
                    <td className="p-2 text-center whitespace-nowrap">
                      ${rate.fob40}
                    </td>
                    <td className="p-2 text-center whitespace-nowrap">
                      ${rate.cif20}
                    </td>
                    <td className="p-2 text-center whitespace-nowrap">
                      ${rate.cif40}
                    </td>
                    <td className="p-2 whitespace-nowrap">{rate.continent}</td>
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
