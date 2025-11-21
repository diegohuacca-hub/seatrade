import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, Globe, TrendingUp, ExternalLink } from 'lucide-react';

const resources = [
  // 🔥 AHORA ESTA PRIMERO 🔥
  {
    category: 'Educación y Capacitación',
    icon: <BookOpen className="h-8 w-8 text-teal-500" />,
    items: [
      {
        title: '¿Cómo exportamos?',
        description: 'Tutorial completo paso a paso',
        url: 'https://www.canva.com/design/DAG0IiFFAgY/83JoEyxgUGgTACWgdeyYzg/view'
      },
      {
        title: '¿Cómo negociamos?',
        description: 'Aprende a negociar con personas de otro país',
        url: 'https://www.canva.com/design/DAG5Jyd313g/3GamxqxzNMivXI-Ice3bPQ/view?utm_content=DAG5Jyd313g&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h470c263cca'
      },
      {
        title: '¿Qué importamos o exportamos?',
        description: 'Listado de productos',
        url: 'https://docs.google.com/spreadsheets/d/1k6Tc3DWcrxGa_rPMZP6deKycW778iDf1OaaMuucf8T8/edit?usp=sharing'
      },
      {
        title: 'Proveedores',
        description: 'Accede a lista de contactos',
        url: 'https://www.canva.com/design/DAG4_gKJsEU/8ddrX4VhSHIFXKCghaYbsQ/view?utm_content=DAG4_gKJsEU&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbffa73df47'
      }
    ]
  },

  {
    category: 'Documentación y Trámites',
    icon: <FileText className="h-8 w-8 text-teal-500" />,
    items: [
      {
        title: 'Guía de Exportación - SUNAT',
        description: 'Procedimientos oficiales para exportar desde Perú',
        url: 'https://www.sunat.gob.pe'
      },
      {
        title: 'VUCE - Ventanilla Única',
        description: 'Sistema integrado de comercio exterior',
        url: 'https://www.vuce.gob.pe'
      }
    ]
  },
  {
    category: 'Instituciones de Comercio Exterior',
    icon: <Globe className="h-8 w-8 text-blue-500" />,
    items: [
      {
        title: 'PromPerú',
        description: 'Promoción del comercio exterior peruano',
        url: 'https://www.promperu.gob.pe'
      },
      {
        title: 'MINCETUR',
        description: 'Ministerio de Comercio Exterior y Turismo',
        url: 'https://www.gob.pe/mincetur'
      },
      {
        title: 'ADEX',
        description: 'Asociación de Exportadores',
        url: 'https://www.adexperu.org.pe'
      }
    ]
  },
  {
    category: 'Estudios de Mercado',
    icon: <TrendingUp className="h-8 w-8 text-indigo-500" />,
    items: [
      {
        title: 'Trade Map',
        description: 'Estadísticas de comercio internacional',
        url: 'https://www.trademap.org'
      },
      {
        title: 'Veritrade',
        description: 'Inteligencia comercial para Latinoamérica',
        url: 'https://www.veritradecorp.com'
      }
    ]
  },
];

export const ResourcesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-blue-500 pb-1 leading-tight">
            Recursos y Enlaces Útiles
          </h1>

          <p className="text-gray-700 text-lg md:text-xl max-w-3xl mx-auto">
            Accede a herramientas, guías y recursos esenciales para facilitar tus operaciones de comercio exterior
          </p>
        </header>

        {/* Resources */}
        <section className="space-y-10">
          {resources.map((category, idx) => (
            <Card key={idx} className="p-8 rounded-3xl shadow-xl hover:shadow-2xl bg-white transition-all">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold text-gray-900">{category.category}</h2>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIdx) => (
                  <Card
                    key={itemIdx}
                    className="p-6 rounded-2xl shadow-md hover:shadow-xl bg-gradient-to-r from-teal-50 to-blue-50 transition-all"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 mb-4 text-sm">{item.description}</p>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <Button
                        className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90"
                        size="sm"
                      >
                        Visitar
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </a>
                  </Card>
                ))}
              </div>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
};
