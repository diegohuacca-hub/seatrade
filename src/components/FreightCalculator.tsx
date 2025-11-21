
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calculator, Package } from "lucide-react";
import { FREIGHT_RATES } from "@/data/freightRates";
import { useLanguage } from "@/contexts/LanguageContext";

export const FreightCalculator = () => {
  const { t } = useLanguage();

  const [weight, setWeight] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [length, setLength] = useState<string>("");
  const [packages, setPackages] = useState<string>("1");
  const [productionCost, setProductionCost] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [containerType, setContainerType] = useState<"20" | "40">("20");
  const [incoterm, setIncoterm] = useState<"FOB" | "CIF">("FOB");

  const [result, setResult] = useState<{
    weightTons: number;
    volumeM3: number;
    stowageFactor: number;
    chargeableUnit: "weight" | "volume";
    freightCost: number;
    totalCost: number;
  } | null>(null);

  const calculateFreight = () => {
    const w = parseFloat(weight);
    const wi = parseFloat(width);
    const h = parseFloat(height);
    const l = parseFloat(length);
    const p = parseFloat(packages);
    const pc = parseFloat(productionCost);

    if (isNaN(w) || isNaN(wi) || isNaN(h) || isNaN(l) || isNaN(p) || !selectedCountry) return;

    const weightTons = (w / 1000) * p;
    const volumeM3 = wi * h * l * p;
    const stowageFactor = volumeM3 / weightTons;
    const chargeableUnit: "weight" | "volume" = stowageFactor > 1 ? "volume" : "weight";
    const chargeableValue = chargeableUnit === "volume" ? volumeM3 : weightTons;

    const rateData = FREIGHT_RATES.find((r) => r.country === selectedCountry);
    if (!rateData) return;

    let freightRate = 0;
    freightRate =
      incoterm === "FOB"
        ? containerType === "20"
          ? rateData.fob20
          : rateData.fob40
        : containerType === "20"
        ? rateData.cif20
        : rateData.cif40;

    const freightCost = chargeableValue * freightRate;
    const totalCost = freightCost + (isNaN(pc) ? 0 : pc);

    setResult({
      weightTons,
      volumeM3,
      stowageFactor,
      chargeableUnit,
      freightCost,
      totalCost,
    });
  };

  const resetCalculator = () => {
    setWeight("");
    setWidth("");
    setHeight("");
    setLength("");
    setPackages("1");
    setProductionCost("");
    setSelectedCountry("");
    setContainerType("20");
    setIncoterm("FOB");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 md:px-12">

      {/* Header */}
      <header className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500">
          {t("calculator.title")}
        </h1>
        <p className="text-gray-700 md:text-lg">{t("calculator.subtitle")}</p>
      </header>

      <div className="flex justify-center">
        <div className="w-full max-w-3xl">

          {!result ? (
            <Card className="p-6 shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-center gap-2 text-xl font-bold">
                  <Package className="text-teal-500" />
                  {t("calculator.cargoData")}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">

                {/* Weight & Packages */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label>{t("calculator.weight")}</Label>
                    <Input placeholder="1000" type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                  </div>
                  <div>
                    <Label>{t("calculator.packages")}</Label>
                    <Input type="number" value={packages} onChange={(e) => setPackages(e.target.value)} />
                  </div>
                </div>

                {/* Dimensions */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div><Label>{t("calculator.width")}</Label><Input type="number" step="0.01" value={width} onChange={(e) => setWidth(e.target.value)} /></div>
                  <div><Label>{t("calculator.height")}</Label><Input type="number" step="0.01" value={height} onChange={(e) => setHeight(e.target.value)} /></div>
                  <div><Label>{t("calculator.length")}</Label><Input type="number" step="0.01" value={length} onChange={(e) => setLength(e.target.value)} /></div>
                </div>

                {/* Destination Country */}
                <div>
                  <Label>{t("calculator.destinationCountry")}</Label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger>
                      <SelectValue placeholder={t("calculator.selectCountry")} />
                    </SelectTrigger>
                    <SelectContent>
                      {FREIGHT_RATES.map((rate) => (
                        <SelectItem key={rate.country} value={rate.country}>
                          {rate.country} ({rate.port})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Container + Incoterm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label>{t("calculator.containerType")}</Label>
                    <Select value={containerType} onValueChange={(v) => setContainerType(v as "20" | "40")}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20">{t("calculator.size20")}</SelectItem>
                        <SelectItem value="40">{t("calculator.size40")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>INCOTERM</Label>
                    <Select value={incoterm} onValueChange={(v) => setIncoterm(v as "FOB" | "CIF")}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FOB">FOB</SelectItem>
                        <SelectItem value="CIF">CIF</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Production */}
                <div>
                  <Label>{t("calculator.productionCost")}</Label>
                  <Input placeholder="10000" type="number" value={productionCost} onChange={(e) => setProductionCost(e.target.value)} />
                </div>

                <Button onClick={calculateFreight} className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white">
                  <Calculator className="mr-2" /> {t("calculator.calculate")}
                </Button>

              </CardContent>
            </Card>
          ) : (
            <Card className="p-6 shadow-xl rounded-3xl">
              <CardHeader className="text-center">
                <CardTitle className="font-bold text-xl">{t("calculator.results")}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="p-4 rounded-xl bg-blue-50">
                  <h3 className="font-semibold">{t("calculator.cargoMeasurements")}</h3>
                  <p>{t("calculator.weightTotal")}: {result.weightTons.toFixed(3)} T</p>
                  <p>{t("calculator.volumeTotal")}: {result.volumeM3.toFixed(3)} m³</p>
                </div>

                <div className="p-4 rounded-xl bg-teal-50">
                  <h3 className="font-semibold">{t("calculator.stowageFactor")}</h3>
                  <p className="text-2xl font-bold">{result.stowageFactor.toFixed(2)}</p>
                </div>

                <div className="p-4 rounded-xl bg-blue-100">
                  <h3 className="font-semibold">{t("calculator.costSection")}</h3>
                  <p>{t("calculator.freight")}: ${result.freightCost.toFixed(2)}</p>
                  {!!productionCost && <p>{t("calculator.production")}: ${parseFloat(productionCost).toFixed(2)}</p>}
                  <h3 className="font-bold text-xl text-teal-600">{t("calculator.total")}: USD ${result.totalCost.toFixed(2)}</h3>
                </div>

                <Button onClick={resetCalculator} className="w-full bg-gray-300 text-gray-900">
                  {t("calculator.new")}
                </Button>
              </CardContent>
            </Card>
          )}

          {/* CTA Card */}
          <Card className="mt-8 bg-teal-50 text-center p-6 rounded-3xl">
            <h2 className="font-semibold text-gray-900 mb-3">{t("calculator.realQuote")}</h2>
            <Button
              className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white"
              onClick={() => window.open("https://www.searates.com/es/", "_blank")}
            >
              {t("calculator.liveEstimate")}
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
