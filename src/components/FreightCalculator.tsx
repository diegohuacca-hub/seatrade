import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calculator, Package } from "lucide-react";
import { FREIGHT_RATES } from "@/data/freightRates";

export const FreightCalculator = () => {

  const [weight, setWeight] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [length, setLength] = useState<string>("");
  const [packages, setPackages] = useState<string>("1");
  const [productionCost, setProductionCost] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [containerType, setContainerType] = useState<"20" | "40">("20");
  const [incoterm, setIncoterm] = useState<"FOB" | "CIF">("FOB");
  const [mode, setMode] = useState<"FCL" | "LCL">("LCL");

  const [result, setResult] = useState<{
    weightTons: number;
    volumeM3: number;
    stowageFactor: number;
    chargeableUnit: "weight" | "volume";
    freightCost: number;
    totalCost: number;
  } | null>(null);

  const normalize = (str: string) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  const calculateFreight = () => {
    const w = parseFloat(weight);
    const wi = parseFloat(width);
    const h = parseFloat(height);
    const l = parseFloat(length);
    const p = parseFloat(packages);
    const pc = parseFloat(productionCost);

    if (!selectedCountry) {
      alert("⚠️ Seleccione un país.");
      return;
    }

    const weightTons = (w / 1000) * p;
    const volumeM3 = (isNaN(wi) ? 1 : wi) * (isNaN(h) ? 1 : h) * (isNaN(l) ? 1 : l) * p;

    const rateData = FREIGHT_RATES.find(
      (r) => normalize(r.country) === normalize(selectedCountry)
    );

    if (!rateData) {
      alert("⚠ No existen tarifas para este destino.");
      return;
    }

    const containerCapacity = {
      "20": { maxVolume: 33.2, maxWeight: 28000 },
      "40": { maxVolume: 67.7, maxWeight: 30000 },
    };

    let freightCost = 0;

    // 🔹 FCL ahora calcula igual que LCL, solo validación del contenedor
    if (mode === "FCL") {
      const capacity = containerCapacity[containerType];

      if (volumeM3 > capacity.maxVolume) {
        alert(`⚠ La carga NO cabe en un contenedor de ${containerType} pies.`);
        return;
      }

      if (weightTons * 1000 > capacity.maxWeight) {
        alert(`⚠ La carga excede el peso máximo permitido del contenedor.`);
        return;
      }

      const stowageFactor = volumeM3 / weightTons;
      const chargeable = Math.max(weightTons, volumeM3);

      const rate =
        incoterm === "FOB"
          ? (containerType === "20" ? rateData.fob20 : rateData.fob40)
          : (containerType === "20" ? rateData.cif20 : rateData.cif40);

      freightCost = rate * chargeable;

      setResult({
        weightTons,
        volumeM3,
        stowageFactor,
        chargeableUnit: weightTons > volumeM3 ? "weight" : "volume",
        freightCost,
        totalCost: freightCost + (isNaN(pc) ? 0 : pc),
      });

      return;
    }

    // 🔹 LCL normal
    const stowageFactor = volumeM3 / weightTons;
    const chargeable = Math.max(weightTons, volumeM3);

    const rate =
      incoterm === "FOB"
        ? (containerType === "20" ? rateData.fob20 : rateData.fob40)
        : (containerType === "20" ? rateData.cif20 : rateData.cif40);

    freightCost = rate * chargeable;

    setResult({
      weightTons,
      volumeM3,
      stowageFactor,
      chargeableUnit: weightTons > volumeM3 ? "weight" : "volume",
      freightCost,
      totalCost: freightCost + (isNaN(pc) ? 0 : pc),
    });
  };

  // ✅ YA NO limpia campos. Solo borra el resultado.
  const resetCalculator = () => {
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 md:px-12">
      
      <header className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
          Calculadora de Flete Marítimo
        </h1>
        <p className="text-gray-700 md:text-lg">
          Calcule el costo estimado basado en peso, volumen, destino e INCOTERM.
        </p>
      </header>

      <div className="flex justify-center">
        <div className="w-full max-w-3xl">

          {!result ? (
            <Card className="p-6 shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2 text-xl font-bold">
                  <Package className="text-teal-500" />
                  Datos de la Carga
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">

                <div>
                  <Label>Tipo de Servicio</Label>
                  <Select value={mode} onValueChange={(v) => setMode(v as "FCL" | "LCL")}>
                    <SelectTrigger className="bg-white border border-gray-300 rounded-lg">
                      <SelectValue placeholder="Seleccione" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="LCL">Carga Parcial (LCL)</SelectItem>
                      <SelectItem value="FCL">Contenedor Completo (FCL)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Peso (kg)</Label>
                    <Input type="number" className="bg-white" value={weight} onChange={(e) => setWeight(e.target.value)} />
                  </div>
                  <div>
                    <Label>Cantidad de Bultos</Label>
                    <Input type="number" className="bg-white" value={packages} onChange={(e) => setPackages(e.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div><Label>Ancho (m)</Label><Input type="number" step="0.01" className="bg-white" value={width} onChange={(e) => setWidth(e.target.value)} /></div>
                  <div><Label>Alto (m)</Label><Input type="number" step="0.01" className="bg-white" value={height} onChange={(e) => setHeight(e.target.value)} /></div>
                  <div><Label>Largo (m)</Label><Input type="number" step="0.01" className="bg-white" value={length} onChange={(e) => setLength(e.target.value)} /></div>
                </div>

                <div>
                  <Label>País de Destino</Label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger className="bg-white border border-gray-300">
                      <SelectValue placeholder="Seleccione un país" />
                    </SelectTrigger>

                    <SelectContent className="bg-white">
                      {FREIGHT_RATES.map((rate) => (
                        <SelectItem key={rate.country} value={rate.country}>
                          {rate.country} ({rate.port})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Tipo de Contenedor</Label>
                    <Select value={containerType} onValueChange={(v) => setContainerType(v as "20" | "40")}>
                      <SelectTrigger className="bg-white border border-gray-300">
                        <SelectValue placeholder="Seleccione" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="20">20 pies</SelectItem>
                        <SelectItem value="40">40 pies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>INCOTERM</Label>
                    <Select value={incoterm} onValueChange={(v) => setIncoterm(v as "FOB" | "CIF")}>
                      <SelectTrigger className="bg-white border border-gray-300">
                        <SelectValue placeholder="Seleccione" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="FOB">FOB</SelectItem>
                        <SelectItem value="CIF">CIF</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>Costo Total de Producción (USD)</Label>
                  <Input placeholder="10000" type="number" className="bg-white" value={productionCost} onChange={(e) => setProductionCost(e.target.value)} />
                </div>

                <Button onClick={calculateFreight} className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white">
                  <Calculator className="mr-2" /> Calcular Flete
                </Button>

              </CardContent>
            </Card>
          ) : (
            <Card className="p-6 shadow-xl rounded-3xl">
              <CardHeader className="text-center">
                <CardTitle className="font-bold text-xl">Resultados del Cálculo</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="p-4 rounded-xl bg-blue-50">
                  <h3 className="font-semibold">Medidas de la Carga</h3>
                  <p>Peso Total: {result.weightTons.toFixed(3)} T</p>
                  <p>Volumen Total: {result.volumeM3.toFixed(3)} m³</p>
                </div>

                <div className="p-4 rounded-xl bg-teal-50">
                  <h3 className="font-semibold">Factor de Estiba</h3>
                  <p className="text-2xl font-bold">{result.stowageFactor.toFixed(2)}</p>
                  <p>{result.chargeableUnit === "volume" ? "Se cobra por volumen" : "Se cobra por peso"}</p>
                </div>

                <div className="p-4 rounded-xl bg-blue-100">
                  <h3 className="font-semibold">Costos</h3>
                  <p>Flete: USD ${result.freightCost.toFixed(2)}</p>
                  {!!productionCost && <p>Producción: USD ${parseFloat(productionCost).toFixed(2)}</p>}
                  <h3 className="font-bold text-xl text-teal-600">Total: USD ${result.totalCost.toFixed(2)}</h3>
                </div>

                <Button onClick={resetCalculator} className="w-full bg-gray-300 text-gray-900">
                  Nuevo Cálculo
                </Button>
              </CardContent>
            </Card>
          )}

          <Card className="mt-8 bg-teal-50 text-center p-8 rounded-3xl shadow-lg border border-teal-200">
            <h2 className="font-extrabold text-gray-900 text-3xl tracking-wide mb-3">
              ¿Quieres precio real actualizado?
            </h2>

            <p className="text-gray-700 text-lg mb-6 max-w-md mx-auto">
              Obtén cotizaciones instantáneas basadas en rutas marítimas y costos reales.
            </p>

            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white text-lg py-6 rounded-xl"
              onClick={() => window.open("https://www.searates.com/es/", "_blank")}
            >
              Ver precios en tiempo real
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
