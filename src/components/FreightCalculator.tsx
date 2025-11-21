import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Calculator, Package } from 'lucide-react';
import { FREIGHT_RATES } from '@/data/freightRates';

export const FreightCalculator = () => {
  const [weight, setWeight] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [length, setLength] = useState<string>('');
  const [packages, setPackages] = useState<string>('1');
  const [productionCost, setProductionCost] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [containerType, setContainerType] = useState<'20' | '40'>('20');
  const [incoterm, setIncoterm] = useState<'FOB' | 'CIF'>('FOB');
  const [result, setResult] = useState<{
    weightTons: number;
    volumeM3: number;
    stowageFactor: number;
    chargeableUnit: 'weight' | 'volume';
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
    const volumeM3 = (wi * h * l) * p;
    const stowageFactor = volumeM3 / weightTons;
    const chargeableUnit: 'weight' | 'volume' = stowageFactor > 1 ? 'volume' : 'weight';
    const chargeableValue = chargeableUnit === 'volume' ? volumeM3 : weightTons;

    const rateData = FREIGHT_RATES.find(r => r.country === selectedCountry);
    if (!rateData) return;

    let freightRate = 0;
    if (incoterm === 'FOB') freightRate = containerType === '20' ? rateData.fob20 : rateData.fob40;
    else freightRate = containerType === '20' ? rateData.cif20 : rateData.cif40;

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
    setWeight('');
    setWidth('');
    setHeight('');
    setLength('');
    setPackages('1');
    setProductionCost('');
    setSelectedCountry('');
    setContainerType('20');
    setIncoterm('FOB');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 md:px-12">

      {/* Header */}
      <header className="flex flex-col items-center mb-12 space-y-4 px-2 sm:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 text-center leading-tight">
          Calculadora de Flete Marítimo
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-3xl text-center">
          Calcule el costo de flete basado en peso, volumen y destino
        </p>
      </header>

      {/* Contenedor Calculadora */}
      <div className="flex justify-center">
        <div className="w-full max-w-3xl">

          {!result ? (
            <Card className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-gray-900 justify-center">
                  <Package className="h-5 w-5 text-teal-500" /> Datos de Carga
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">

                {/* Peso y Bultos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Peso (kg)</Label>
                    <Input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="1000" />
                  </div>
                  <div>
                    <Label>Cantidad de Bultos</Label>
                    <Input type="number" value={packages} onChange={(e) => setPackages(e.target.value)} placeholder="1" />
                  </div>
                </div>

                {/* Dimensiones */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <Label>Ancho (m)</Label>
                    <Input type="number" step="0.01" value={width} onChange={(e) => setWidth(e.target.value)} />
                  </div>
                  <div>
                    <Label>Alto (m)</Label>
                    <Input type="number" step="0.01" value={height} onChange={(e) => setHeight(e.target.value)} />
                  </div>
                  <div>
                    <Label>Largo (m)</Label>
                    <Input type="number" step="0.01" value={length} onChange={(e) => setLength(e.target.value)} />
                  </div>
                </div>

                {/* País */}
                <div>
                  <Label>País de Destino</Label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione un país" />
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

                {/* Contenedor e Incoterm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label>Tipo de Contenedor</Label>
                    <Select value={containerType} onValueChange={(v) => setContainerType(v as '20' | '40')}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20">20 pies</SelectItem>
                        <SelectItem value="40">40 pies</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>INCOTERM</Label>
                    <Select value={incoterm} onValueChange={(v) => setIncoterm(v as 'FOB' | 'CIF')}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="FOB">FOB</SelectItem>
                        <SelectItem value="CIF">CIF</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Producción */}
                <div>
                  <Label>Costo Total de Producción (USD)</Label>
                  <Input type="number" value={productionCost} onChange={(e) => setProductionCost(e.target.value)} placeholder="10000" />
                </div>

                <Button onClick={calculateFreight} className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90" size="lg">
                  <Calculator className="mr-2 h-5 w-5" /> Calcular Flete
                </Button>

              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all">
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
                  Resultados del Cálculo
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">

                {/* Datos */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-50 to-blue-50 space-y-2 shadow-inner">
                  <h3 className="font-semibold text-gray-900">Medidas de Carga</h3>
                  <p>Peso total: {result.weightTons.toFixed(3)} Ton</p>
                  <p>Volumen total: {result.volumeM3.toFixed(3)} m³</p>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-teal-50 space-y-2 shadow-inner">
                  <h3 className="font-semibold text-gray-900">Factor de Estiba</h3>
                  <p className="text-2xl font-bold text-teal-600">{result.stowageFactor.toFixed(2)}</p>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-100 to-blue-100 space-y-2 shadow-inner">
                  <h3 className="font-semibold text-gray-900">Costos</h3>
                  <p>Flete: ${result.freightCost.toFixed(2)}</p>
                  {!!productionCost && <p>Producción: ${parseFloat(productionCost).toFixed(2)}</p>}
                  <h3 className="font-bold text-teal-600 text-xl">
                    Total: USD ${result.totalCost.toFixed(2)}
                  </h3>
                </div>

                <Button onClick={resetCalculator} className="w-full bg-gray-300 hover:bg-gray-400 text-gray-900">
                  Nuevo Cálculo
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Botón debajo SIEMPRE */}
          <Card className="mt-10 bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl shadow-lg p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              ¿Quieres una cotización real del mercado?
            </h2>

            <Button
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:opacity-90 w-full text-lg font-bold"
              size="lg"
              onClick={() => window.open('https://www.searates.com/es/', '_blank')}
            >
            ESTIMACIÓN EN TIEMPO REAL
            </Button>
          </Card>

        </div>
      </div>
    </div>
  );
};

