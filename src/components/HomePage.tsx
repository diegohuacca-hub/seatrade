// HomePage with applied color palette and typography
// Fonts applied: Bobby Jones for titles, Bobby Jones Condensed for subtitles, Poppins for text

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

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

const teamMembers = [
  { name: 'Diana Ccahua Choqueanco', linkedin: 'https://www.linkedin.com/in/diana-ccahua' },
  { name: 'Monica Ccoropuna Choqueanco', linkedin: 'https://www.linkedin.com/in/monica-jazmin-ccoropuna-huayhua-b315b131a' },
  { name: 'Tatiana Gonzales Huichi', linkedin: null },
  { name: 'Axel Luna Ugarte', linkedin: null },
  { name: 'Josue Luza Lizarraga', linkedin: 'https://www.linkedin.com/in/josué-gabriel-luza-lizarraga-49554a240' },
  { name: 'Rui Huamani Mamani', linkedin: null },
  { name: 'Johan Paredes Flores', linkedin: null },
  { name: 'Valeria Talavera Arapa', linkedin: 'https://www.linkedin.com/in/valeria-talavera-99b975286' },
  { name: 'Cielo Torres Valeriano', linkedin: 'https://www.linkedin.com/in/cielo-faviana-torres-valeriano-736711257' },
  { name: 'Ivan Uscca Aguila', linkedin: null }
];

export const HomePage = ({ setActiveTab }: HomePageProps) => {
  return (
    <div className="min-h-screen bg-[#d2dfe5] font-poppins overflow-hidden">

      {/* ──────────────── HERO ──────────────── */}
      <section
        className="relative py-28 px-6 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imagenes/img-inicio.jpg')" }}
      >
        <motion.div
          className="absolute inset-0 bg-black/50"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        <div className="relative max-w-6xl mx-auto text-center md:text-left flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <motion.div initial={{ rotate: -10, scale: 0.8 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: 'spring', stiffness: 100 }}>
              <Ship className="h-20 w-20 mx-auto md:mx-0 text-white" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bobby font-extrabold text-white drop-shadow-lg">
              Sea Trade Navigator
            </h1>

            <p className="text-lg md:text-xl text-white drop-shadow-md max-w-xl">
              Plataforma Integral de Comercio Marítimo Internacional del Perú
            </p>

            <p className="text-sm md:text-base text-white/90 max-w-lg">
              Explora rutas marítimas, puertos internacionales y facilita tu comercio exterior.
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Button
                className="mt-4 bg-[#4f707b] text-white hover:bg-[#2c3e50] transition-all rounded-xl px-6 py-2"
                onClick={() => setActiveTab('mapa')}
              >
                Comenzar
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────────── EQUIPO ──────────────── */}
      <motion.section
        className="max-w-6xl mx-auto px-6 py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
      >
        <h2 className="text-3xl font-bobby font-bold text-[#2c3e50] mb-6 flex items-center gap-2">
          <Users className="h-8 w-8 text-[#45616d]" /> Equipo del Proyecto
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {teamMembers.map((member, idx) => (
            <motion.div key={idx} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: 0.5, ease: 'easeOut' }}>
              <Card className="flex items-center justify-between p-4 bg-[#a2c0cb] hover:bg-[#8bb1c1] transition-all rounded-xl shadow-md">
                <span className="text-[#2c3e50] font-semibold">{member.name}</span>
                {member.linkedin && (
                  <motion.a href={member.linkedin} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2 }}>
                    <Linkedin className="h-5 w-5 text-[#4f707b]" />
                  </motion.a>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ──────────────── ASESOR ──────────────── */}
      <motion.section className="max-w-6xl mx-auto px-6 py-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
        <Card className="p-6 shadow-md border rounded-xl bg-[#b7c9d9] border-[#8da3b1]">
          <div className="flex items-center gap-3 mb-4">
            <UserCheck className="h-8 w-8 text-[#45616d]" />
            <h2 className="text-xl md:text-2xl font-bobby-condensed font-bold text-[#2c3e50]">Asesor del Proyecto</h2>
          </div>
          <p className="text-base font-semibold text-[#2c3e50]">Manuel Tejada Mandujano</p>
        </Card>
      </motion.section>

      {/* ──────────────── FUNCIONES PRINCIPALES ──────────────── */}
      <motion.section className="max-w-6xl mx-auto px-6 py-12" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}>
        <h2 className="text-3xl font-bobby font-bold text-[#2c3e50] mb-8 text-center">Funciones Principales</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Map,
              title: 'Mapa Interactivo',
              text: 'Explora rutas marítimas en 3D/2D desde los puertos del Perú.',
              tab: 'mapa'
            },
            {
              icon: Anchor,
              title: 'Información de Puertos',
              text: 'Datos completos de Callao, Paita y Chancay con recursos educativos.',
              tab: 'informacion'
            },
            {
              icon: Globe2,
              title: 'Comercio Internacional',
              text: 'Guías, fichas país y herramientas para exportaciones.',
              tab: 'recursos'
            }
          ].map((feature, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.2, duration: 0.6 }} whileHover={{ scale: 1.03, y: -5 }}>
              <Card className="p-6 bg-[#d2dfe5] hover:bg-[#b9cdd5] border border-[#8da3b1] cursor-pointer shadow-sm rounded-xl transition-all" onClick={() => setActiveTab(feature.tab)}>
                <div className="flex items-center gap-2 mb-3">
                  <feature.icon className="h-6 w-6 text-[#45616d]" />
                  <h3 className="text-xl font-bobby-condensed font-bold text-[#2c3e50]">{feature.title}</h3>
                </div>
                <p className="text-[#31454c] text-sm">{feature.text}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ───────── CONTACTO COMPACTO FULL WIDTH ───────── */}
      <motion.section
        className="w-full bg-[#b7c9d9] border-t border-[#8da3b1] py-8 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-5xl mx-auto text-center space-y-4">

          <h2 className="text-2xl font-bobby font-bold text-[#2c3e50]">
            Contáctanos
          </h2>

          <p className="text-[#31454c] max-w-xl mx-auto text-sm">
            Si tienes consultas o deseas solicitar una cotización, estaremos encantados de ayudarte.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-4">

            {/* Email */}
            <div className="flex flex-col items-center space-y-1">
              <span className="bg-[#4f707b] p-3 rounded-full shadow-md text-white text-lg">
                📧
              </span>
              <p className="font-semibold text-[#2c3e50] text-sm">74086449@continental.edu.pe</p>
              <p className="text-[#31454c] text-xs">Correo institucional</p>
            </div>

            {/* Teléfono */}
            <div className="flex flex-col items-center space-y-1">
              <span className="bg-[#4f707b] p-3 rounded-full shadow-md text-white text-lg">
                📞
              </span>
              <p className="font-semibold text-[#2c3e50] text-sm">+51 1 234 5678</p>
              <p className="text-[#31454c] text-xs">Teléfono</p>
            </div>

            {/* Ubicación */}
            <div className="flex flex-col items-center space-y-1">
              <span className="bg-[#4f707b] p-3 rounded-full shadow-md text-white text-lg">
                📍
              </span>
              <p className="font-semibold text-[#2c3e50] text-sm">Arequipa, Perú</p>
              <p className="text-[#31454c] text-xs">Ubicación</p>
            </div>
          </div>

          <motion.button
            onClick={() => setActiveTab('contacto')}
            className="mt-4 bg-[#4f707b] text-white px-4 py-2 text-sm rounded-lg shadow-md hover:bg-[#2c3e50] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Ir al Formulario
          </motion.button>

        </div>
      </motion.section>

    </div>
  );
};
