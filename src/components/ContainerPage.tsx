import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Package, Thermometer } from "lucide-react";
import { FREIGHT_RATES, CONTINENTS } from "@/data/freightRates";
import { CONTAINER_DETAILS_CHANCAY } from "@/data/containerDetailsChancay";
import { CONTAINER_DETAILS_CALLAO } from "@/data/containerDetailsCallao";
import { CONTAINER_DETAILS_PAITA } from "@/data/containerDetailsPaita";
import { Container3D } from "@/components/Container3D";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContainerPage = () => {
  const { t } = useLanguage();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("Todos");

  const containerTypes = [
    { name: t("containers.dv20"), icon: Package },
    { name: t("containers.dv40"), icon: Package },
    { name: t("containers.ref20"), icon: Thermometer },
    { name: t("containers.ref40"), icon: Thermometer },
  ];

  const COUNTRY_LIST = [...new Set(FREIGHT_RATES.map((r) => r.country))];

  const [selectedCountries, setSelectedCountries] = useState(containerTypes.map(() => ""));
  const [selectedDestinations, setSelectedDestinations] = useState(containerTypes.map(() => ""));

  const getFilteredCountries = (query: string) => {
    const normalized = query.toLowerCase().trim();

    const sorted = [...COUNTRY_LIST].sort((a, b) => {
      const aStarts = a.toLowerCase().startsWith(normalized);
      const bStarts = b.toLowerCase().startsWith(normalized);

      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;

      return a.localeCompare(b);
    });

    return normalized ? sorted.filter((c) => c.toLowerCase().includes(normalized)) : sorted;
  };

  const filteredRates = FREIGHT_RATES.filter((rate) => {
    const matchSearch =
      rate.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rate.port.toLowerCase().includes(searchTerm.toLowerCase());

    const matchContinent =
      selectedContinent === t("containers.all") || rate.continent === selectedContinent;

    return matchSearch && matchContinent;
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

    const match = dataset.find((d) => d.pais === origin && d.destino === destination);

    if (!match) return alert(t("containers.noRoute"));

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
      alert(t("containers.noLink"));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* HEADER */}
        <header className="text-center space-y-2">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500 truncate">
            {t("containers.title")}
          </h1>
          <p className="text-gray-600 text-lg line-clamp-2 max-w-2xl mx-auto">
            {t("containers.subtitle")}
          </p>
        </header>

        {/* TARJETAS */}
        <div className="grid md:grid-cols-2 gap-6">
          {containerTypes.map((container, idx) => {
            const Icon = container.icon;

            return (
              <Card key={idx} className="p-6 shadow-lg rounded-2xl bg-white">
                <div className="flex gap-3 mb-3 items-center">
                  <Icon className="text-teal-500 w-8 h-8" />
                  <h2 className="font-bold text-lg truncate">{container.name}</h2>
                </div>

                <Container3D type={container.name.includes("20") ? "20" : "40"} isReefer={container.name.includes("REEFER")} />
                <p className="text-xs text-gray-500 text-center">{t("containers.rotate")}</p>

                {/* ORIGIN INPUT */}
                <label className="block mt-4 font-semibold text-sm">{t("containers.origin")}</label>
                <Input
                  placeholder={t("containers.originPH")}
                  value={selectedCountries[idx]}
                  onChange={(e) => {
                    const updated = [...selectedCountries];
                    updated[idx] = e.target.value;
                    setSelectedCountries(updated);
                  }}
                />

                {selectedCountries[idx] &&
                  !COUNTRY_LIST.includes(selectedCountries[idx]) &&
                  getFilteredCountries(selectedCountries[idx]).map((country) => (
                    <button
                      key={country}
                      className="w-full text-left px-3 py-1 hover:bg-gray-100 text-sm"
                      onClick={() => {
                        const updated = [...selectedCountries];
                        updated[idx] = country;
                        setSelectedCountries(updated);
                      }}
                    >
                      {country}
                    </button>
                  ))}

                {/* DESTINATION BUTTONS */}
                <label className="block mt-4 font-semibold text-sm">{t("containers.destination")}</label>
                <div className="flex gap-2 mt-2">
                  {["callao", "chancay", "paita"].map((port) => (
                    <button
                      key={port}
                      className={`px-4 py-2 rounded-md text-sm truncate ${
                        selectedDestinations[idx] === port ? "bg-teal-600 text-white" : "bg-gray-200"
                      }`}
                      onClick={() => {
                        const updated = [...selectedDestinations];
                        updated[idx] = port;
                        setSelectedDestinations(updated);
                      }}
                    >
                      {t(`containers.dest.${port}`)}
                    </button>
                  ))}
                </div>

                {/* CTA */}
                <button
                  onClick={() => handleOpenTariff(idx, container.name)}
                  className="mt-5 bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg font-semibold truncate"
                >
                  {t("containers.viewRates")}
                </button>
              </Card>
            );
          })}
        </div>

        {/* TABLA DE TARIFAS */}
        <Card className="p-6">
          <h2 className="font-bold text-xl mb-4 truncate">{t("containers.tableTitle")}</h2>

          <div className="flex flex-col md:flex-row gap-3 mb-4">
            <Input placeholder={t("containers.searchPH")} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

            <Select value={selectedContinent} onValueChange={setSelectedContinent}>
              <SelectTrigger className="w-full md:w-48 truncate">
                <SelectValue placeholder={t("containers.selectContinent")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Todos">{t("containers.all")}</SelectItem>
                {CONTINENTS.map((c) => (
                  <SelectItem key={c} value={c}>
                    {t(`containers.continentName.${c}`) || c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* TABLE */}
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2">{t("containers.country")}</th>
                <th className="p-2">{t("containers.port")}</th>
                <th className="p-2 text-center">{t("containers.fob20")}</th>
                <th className="p-2 text-center">{t("containers.fob40")}</th>
                <th className="p-2 text-center">{t("containers.cif20")}</th>
                <th className="p-2 text-center">{t("containers.cif40")}</th>
                <th className="p-2">{t("containers.continent")}</th>
              </tr>
            </thead>

            <tbody>
              {filteredRates.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center p-4 text-gray-500">
                    {t("containers.noResults")}
                  </td>
                </tr>
              ) : (
                filteredRates.map((rate, i) => (
                  <tr key={i} className="border-b hover:bg-gray-50">
                    <td className="p-2">{rate.country}</td>
                    <td className="p-2">{rate.port}</td>
                    <td className="p-2 text-center">${rate.fob20}</td>
                    <td className="p-2 text-center">${rate.fob40}</td>
                    <td className="p-2 text-center">${rate.cif20}</td>
                    <td className="p-2 text-center">${rate.cif40}</td>
                    <td className="p-2">{t(`containers.continentName.${rate.continent}`) || rate.continent}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
};
