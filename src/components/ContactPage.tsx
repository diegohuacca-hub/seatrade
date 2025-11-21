import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    puertoOrigen: '',
    puertoDestino: '',
    tipoMercancia: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitud Enviada",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      empresa: '',
      puertoOrigen: '',
      puertoDestino: '',
      tipoMercancia: '',
      mensaje: ''
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Header */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 leading-tight">
            Solicitud de Cotización
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            Completa el formulario y recibe una cotización personalizada para tus necesidades de comercio marítimo
          </p>
        </header>

        {/* SOLO FORMULARIO */}
        <Card className="p-8 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-gray-800 font-semibold">Nombre Completo *</Label>
                <Input
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Juan Pérez"
                  className="bg-gray-50 border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-800 font-semibold">Correo Electrónico *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="juan@empresa.com"
                  className="bg-gray-50 border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-gray-800 font-semibold">Teléfono</Label>
                <Input
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+51 999 999 999"
                  className="bg-gray-50 border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="empresa" className="text-gray-800 font-semibold">Empresa</Label>
                <Input
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  placeholder="Empresa SAC"
                  className="bg-gray-50 border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="puertoOrigen" className="text-gray-800 font-semibold">Puerto de Origen</Label>
                <Input
                  id="puertoOrigen"
                  name="puertoOrigen"
                  value={formData.puertoOrigen}
                  onChange={handleChange}
                  placeholder="Callao, Paita o Chancay"
                  className="bg-gray-50 border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="puertoDestino" className="text-gray-800 font-semibold">Puerto de Destino</Label>
                <Input
                  id="puertoDestino"
                  name="puertoDestino"
                  value={formData.puertoDestino}
                  onChange={handleChange}
                  placeholder="Shanghai, Los Ángeles, etc."
                  className="bg-gray-50 border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="tipoMercancia" className="text-gray-800 font-semibold">Tipo de Mercancía</Label>
              <Input
                id="tipoMercancia"
                name="tipoMercancia"
                value={formData.tipoMercancia}
                onChange={handleChange}
                placeholder="Productos agrícolas, textiles, etc."
                className="bg-gray-50 border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensaje" className="text-gray-800 font-semibold">Mensaje / Detalles Adicionales *</Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                placeholder="Describe tus necesidades de envío, volumen estimado, fechas, etc."
                className="bg-gray-50 border-gray-300 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 min-h-36"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90 transition-all"
              size="lg"
            >
              <Send className="h-5 w-5 mr-2" />
              Enviar Solicitud
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};
