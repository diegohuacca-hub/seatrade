import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const InfoPage = () => {
  const { t } = useLanguage();

  const peruPorts = [
    {
      name: t("info.chancay.title"),
      description: t("info.chancay.desc"),
      video: 'https://www.youtube.com/embed/Z3un61RDc8I',
      links: [
        { url: 'https://coscochancay.pe/#/home', label: t("info.buttons.official") },
        { url: 'https://satellites.pro/mapa_de_Puerto_Chancay', label: t("info.buttons.satellite") },
      ],
    },
    {
      name: t("info.callao.title"),
      description: t("info.callao.desc"),
      video: 'https://www.youtube.com/embed/zM5sCQAslkc',
      links: [
        { url: 'https://www.apmterminals.com/es/callao', label: t("info.buttons.official") },
        { url: 'https://satellites.pro/mapa_de_El_Callao.Region_de_Callao.Peru', label: t("info.buttons.satellite") },
      ],
    },
    {
      name: t("info.paita.title"),
      description: t("info.paita.desc"),
      video: 'https://www.youtube.com/embed/sc8iqzkEO3Y',
      links: [
        { url: 'https://www.puertopaita.com', label: t("info.buttons.official") },
        { url: 'https://satellites.pro/mapa_de_Paita.Peru#-5.078355,-81.109958,15',
          label: t("info.buttons.satellite") 
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">

      <div className="max-w-6xl mx-auto py-12 px-6 md:px-12 space-y-20">

        {/* HEADER */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 pb-1 leading-tight">
            {t("info.header")}
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            {t("info.subheader")}
          </p>
        </header>

        {/* PUERTOS */}
        <section className="space-y-20">
          {peruPorts.map((port, idx) => (
            <Card key={idx} className="overflow-hidden rounded-3xl shadow-xl hover:scale-105 transition duration-300 bg-white">
              <div className={`flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* VIDEO */}
                <div className="md:w-1/2 relative">
                  <div className="relative w-full h-[220px] md:h-[330px] lg:h-[380px]">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-xl"
                      src={port.video}
                      title={port.name}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                {/* TEXTO */}
                <div className="md:w-1/2 p-8 bg-gradient-to-b from-white to-gray-50 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{port.name}</h2>
                  <p className="text-gray-700 mb-6">{port.description}</p>

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
      </div>

      {/* SECCIÓN FINAL */}
      <section className="w-full bg-[#6E8797] py-14 px-6 md:px-20 text-center mt-0">

        <h2 className="text-2xl font-bold text-white tracking-wide">
          {t("info.toolsTitle")}
        </h2>

        <p className="text-gray-200 text-sm max-w-3xl mx-auto mt-2">
          {t("info.toolsDesc")}
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-8">
          <a href="https://sailingheaven.org/es/trafico-maritimo/" target="_blank" className="w-full md:w-1/2">
            <button className="w-full bg-[#BFD3DB] text-gray-900 font-semibold text-lg px-6 py-3 rounded-full shadow hover:scale-105 transition duration-300">
              {t("info.toolsButton1")}
            </button>
          </a>

          <a href="https://www.vesselfinder.com/es" target="_blank" className="w-full md:w-1/2">
            <button className="w-full bg-[#BFD3DB] text-gray-900 font-semibold text-lg px-6 py-3 rounded-full shadow hover:scale-105 transition duration-300">
              {t("info.toolsButton2")}
            </button>
          </a>
        </div>
      </section>

    </div>
  );
};
