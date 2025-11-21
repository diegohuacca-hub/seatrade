import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Ship,
  Users,
  UserCheck,
  Linkedin,
  Map,
  Anchor,
  Globe2
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

const teamMembers = [
  { name: 'Diana Ccahua Choqueanco', linkedin: 'https://www.linkedin.com/in/diana-ccahua', image: '/imagenes/Diana.jpg' },
  { name: 'Monica Ccoropuna Choqueanco', linkedin: 'https://www.linkedin.com/in/monica-jazmin-ccoropuna-huayhua-b315b131a', image: '/imagenes/Monica.jpg' },
  { name: 'Tatiana Gonzales Huichi', linkedin: 'https://www.linkedin.com/in/tatiana-gonzales-77109a198', image: '/imagenes/Tatiana.jpg' },
  { name: 'Axel Luna Ugarte', linkedin: 'https://www.linkedin.com/in/axel-giampiero-luna-ugarte-656093370', image: '/imagenes/Axel.jpg' },
  { name: 'Josue Luza Lizarraga', linkedin: 'https://www.linkedin.com/in/josue-gabriel-luza-lizarraga-49554a240', image: '/imagenes/Josue.jpg' },
  { name: 'Rui Huamani Mamani', linkedin: 'https://www.linkedin.com/in/rui-oliver-huamani-mamani-19349130b', image: '/imagenes/Rui.jpg' },
  { name: 'Johan Paredes Flores', linkedin: 'https://www.linkedin.com/in/johan-daniel-paredes-flores-403570240', image: '/imagenes/Johan.jpg' },
  { name: 'Valeria Talavera Arapa', linkedin: 'https://www.linkedin.com/in/valeria-talavera-99b975286', image: '/imagenes/Valeria.jpeg' },
  { name: 'Cielo Torres Valeriano', linkedin: 'https://www.linkedin.com/in/cielo-faviana-torres-valeriano-736711257', image: '/imagenes/Cielo.jpg' },
  { name: 'Ivan Uscca Aguila', linkedin: 'https://www.linkedin.com/in/ivan-uscca-aguilar-428073207', image: '/imagenes/Ivan.jpg' }
];

export const HomePage = ({ setActiveTab }: HomePageProps) => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#d2dfe5] font-poppins overflow-hidden">

      {/* HERO */}
      <section
        className="relative py-28 px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imagenes/img-inicio.jpg')" }}
      >
        <motion.div
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        <div className="relative max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Ship className="h-20 w-20 mx-auto md:mx-0 text-white" />

            {/* Name stays unchanged */}
            <h1 className="text-4xl md:text-5xl font-bobby font-extrabold text-white drop-shadow-lg">
              Sea Trade Navigator
            </h1>

            <p className="text-lg md:text-xl text-white drop-shadow-md max-w-xl">
              {t("home.subtitle")}
            </p>

            <p className="text-sm md:text-base text-white/90 max-w-lg">
              {t("home.description")}
            </p>

            <Button
              className="mt-4 bg-[#4f707b] text-white hover:bg-[#2c3e50] transition-all rounded-xl px-6 py-2"
              onClick={() => setActiveTab('mapa')}
            >
              {t("home.start")}
            </Button>
          </motion.div>
        </div>
      </section>

      {/* EQUIPO */}
      <motion.section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bobby font-bold text-[#2c3e50] mb-8 text-center flex justify-center items-center gap-2">
          <Users className="h-8 w-8 text-[#45616d]" /> {t("home.team")}
        </h2>

        {/* Team grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
          {teamMembers.map((member, idx) => (
            <Card
              key={idx}
              className="flex flex-col items-center text-center p-6 bg-[#a2c0cb] hover:bg-[#8bb1c1] transition-all rounded-2xl shadow-xl"
            >
              <motion.img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-xl border-2 border-[#45616d] shadow-md"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 150 }}
              />

              <p className="font-semibold text-[#2c3e50] text-sm md:text-base mt-4">{member.name}</p>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0A66C2] text-white text-xs font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200 backdrop-blur-sm"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              )}
            </Card>
          ))}
        </div>
      </motion.section>

      {/* ASESOR */}
      <motion.section className="max-w-6xl mx-auto px-6 py-6">
        <Card className="p-6 shadow-md bg-[#b7c9d9] border border-[#8da3b1] rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <UserCheck className="h-8 w-8 text-[#45616d]" />
            <h2 className="text-xl md:text-2xl font-bobby-condensed font-bold text-[#2c3e50]">
              {t("home.advisor")}
            </h2>
          </div>
          <p className="text-base font-semibold text-[#2c3e50]">Manuel Tejada Mandujano</p>
        </Card>
      </motion.section>

      {/* FEATURES */}
      <motion.section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bobby font-bold text-[#2c3e50] mb-8 text-center">{t("home.features")}</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Map, title: t("home.featureMap"), tab: "mapa", text: t("home.featureMapText") },
            { icon: Anchor, title: t("home.featureInfo"), tab: "informacion", text: t("home.featureInfoText") },
            { icon: Globe2, title: t("home.featureTrade"), tab: "recursos", text: t("home.featureTradeText") }
          ].map((feature, idx) => (
            <Card
              key={idx}
              className="p-6 bg-[#d2dfe5] hover:bg-[#b9cdd5] cursor-pointer border border-[#8da3b1] shadow-sm rounded-xl transition-all"
              onClick={() => setActiveTab(feature.tab)}
            >
              <div className="flex items-center gap-2 mb-3">
                <feature.icon className="h-6 w-6 text-[#45616d]" />
                <h3 className="text-xl font-bobby-condensed font-bold text-[#2c3e50]">{feature.title}</h3>
              </div>
              <p className="text-[#31454c] text-sm">{feature.text}</p>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section className="w-full bg-[#b7c9d9] border-t border-[#8da3b1] py-10 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <h2 className="text-2xl font-bobby font-bold text-[#2c3e50]">{t("home.contactTitle")}</h2>

          <p className="text-[#31454c] max-w-xl mx-auto text-sm">{t("home.contactText")}</p>

          <motion.button
            onClick={() => setActiveTab("contacto")}
            className="mt-4 bg-[#4f707b] text-white px-4 py-2 text-sm rounded-lg shadow-md hover:bg-[#2c3e50] transition-all"
            whileHover={{ scale: 1.05 }}
          >
            {t("home.contactButton")}
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};
