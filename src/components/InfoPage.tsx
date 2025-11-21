import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Ship, BookOpen, TrendingUp } from 'lucide-react';

export const InfoPage = () => {
  const peruPorts = [
    {
      name: 'Puerto de Chancay',
      description:
        'Terminal portuario peruano de alta capacidad ubicado en Chancay, Huaral. Primer puerto inteligente y automatizado de Sudamérica, con infraestructura avanzada y operaciones 24/7.',
      image: '/imagenes/Chancay.jpg',
      icon: '',
      links: [
        { url: 'https://coscochancay.pe/#/home', label: 'Sitio Oficial' },
        { url: 'https://satellites.pro/mapa_de_Puerto_Chancay', label: 'Vista Satelital' },
      ],
    },
    {
      name: 'Puerto del Callao',
      description:
        'Puerto principal de Perú, estratégico para el comercio marítimo del Pacífico Sur. Profundidad hasta 16 metros y capacidad para grandes portacontenedores.',
      image: '/imagenes/Callao.jpg',
      icon: '',
      links: [
        { url: 'https://www.apmterminals.com/es/callao', label: 'Sitio Oficial' },
        { url: 'https://satellites.pro/mapa_de_El_Callao.Region_de_Callao.Peru', label: 'Vista Satelital' },
      ],
    },
    {
      name: 'Puerto de Paita',
      description:
        'Puerto marítimo del norte peruano, segundo en movimiento de contenedores y especializado en exportaciones agrícolas e hidrobiológicas.',
      image: '/imagenes/Paita.jpg',
      icon: '',
      links: [
        { url: 'https://www.puertopaita.com', label: 'Sitio Oficial' },
        { url: 'https://satellites.pro/mapa_de_Paita.Peru#-5.078355,-81.109958,15', label: 'Vista Satelital' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-20">

        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 pb-1 leading-tight">
            Puertos y Recursos del Perú
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            Descubre los principales puertos, herramientas y recursos marítimos en un solo sitio.
          </p>
        </header>

        {/* ======== PUERTOS ======== */}
        <section className="space-y-20">
          {peruPorts.map((port, idx) => (
            <Card key={idx} className="overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition duration-300 bg-white">
              <div className={`flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* VIDEO */}
                <div className="md:w-1/2 relative">
                  <video
                    src={port.image.replace('/imagenes/', '/videos/').replace('.jpg', '.mp4')}
                    poster={port.image}
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                    className="w-full h-80 md:h-full object-cover rounded-none"
                  />
                  <div className="absolute bottom-4 left-4 text-5xl">{port.icon}</div>
                </div>

                {/* INFO */}
                <div className="md:w-1/2 p-8 bg-gradient-to-b from-white to-gray-50 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{port.name}</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">{port.description}</p>

                  <div className="flex flex-col md:flex-row gap-3">
                    {port.links.map((link, i) => (
                      <a key={i} href={link.url} target="_blank">
                        <Button className="rounded-full bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 flex gap-2 items-center shadow hover:scale-105 transition duration-300">
                          {link.label} <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </Card>
          ))}
        </section>

        {/* ===== SECCIÓN NUEVA (COMO LA IMAGEN) ===== */}
        {/* ===== SECCIÓN NUEVA ESTILO MÁS LIMPIO Y MODERNO ===== */}
<section className="bg-[#6E8797] rounded-3xl py-10 px-6 md:px-12 text-center shadow-xl space-y-8">
  <h2 className="text-2xl font-bold text-white tracking-wide">
    Herramientas en Tiempo Real
  </h2>

  <p className="text-gray-200 text-sm max-w-2xl mx-auto">
    Accede a plataformas profesionales para visualizar tráfico marítimo global,
    rutas, barcos y contenedores en vivo.
  </p>

  <div className="flex flex-col md:flex-row justify-center gap-6">

    {/* Botón 1 */}
    <a
      href="https://sailingheaven.org/es/trafico-maritimo/"
      target="_blank"
      className="w-full md:w-1/2"
    >
      <button className="w-full bg-[#BFD3DB] text-gray-900 font-semibold text-lg px-6 py-3 rounded-full shadow hover:scale-105 hover:bg-[#d0e3ea] transition duration-300 flex justify-center gap-2 items-center">
        Tráfico marítimo
      </button>
    </a>

    {/* Botón 2 */}
    <a
      href="https://www.vesselfinder.com/es"
      target="_blank"
      className="w-full md:w-1/2"
    >
      <button className="w-full bg-[#BFD3DB] text-gray-900 font-semibold text-lg px-6 py-3 rounded-full shadow hover:scale-105 hover:bg-[#d0e3ea] transition duration-300 flex justify-center gap-2 items-center">
        Seguimiento de barcos y contenedores
      </button>
    </a>

  </div>
</section>


      </div>
    </div>
  );
};
