import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, HardHat, Home as HomeIcon, Ruler } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Modern home construction" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-amber-500" />
              <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">EZ Select Concept</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              L'excellence en <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                construction résidentielle
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
              Nous bâtissons la fondation de votre avenir. À Lacolle et dans ses environs, nous réalisons des projets résidentiels sur-mesure avec une qualité de finition irréprochable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex justify-center items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-sm transition-all shadow-[0_4px_14px_0_rgba(245,158,11,0.39)]"
              >
                Parler de votre projet <ArrowRight size={20} />
              </Link>
              <Link 
                to="/realisations" 
                className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-bold py-4 px-8 rounded-sm transition-all"
              >
                Voir nos réalisations
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Highlight Bar */}
      <section className="bg-slate-900 py-12 relative z-20 -mt-10 mx-4 max-w-7xl lg:mx-auto rounded-sm shadow-xl border-b-4 border-amber-500">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
              <HardHat className="text-amber-500" size={32} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Équipe Experte</h3>
              <p className="text-slate-400 text-sm mt-1">Des professionnels certifiés à votre service</p>
            </div>
          </div>
          <div className="flex items-center gap-6 md:border-l md:border-slate-700 md:pl-8">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
              <CheckCircle className="text-amber-500" size={32} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Qualité Supérieure</h3>
              <p className="text-slate-400 text-sm mt-1">Matériaux premium et finitions soignées</p>
            </div>
          </div>
          <div className="flex items-center gap-6 md:border-l md:border-slate-700 md:pl-8">
            <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
              <Ruler className="text-amber-500" size={32} />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Projets Sur-Mesure</h3>
              <p className="text-slate-400 text-sm mt-1">Adaptés à vos besoins et votre budget</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-3">Notre Expertise</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-6 font-headings">Donnez vie à votre vision</h3>
            <p className="text-slate-600 text-lg">
              De la conception aux finitions, EZ Select Concept vous accompagne à chaque étape de votre projet de construction résidentielle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Construction Neuve",
                desc: "Des fondations à la toiture, nous bâtissons la maison de vos rêves en respectant les normes les plus strictes.",
                icon: <HomeIcon size={40} className="text-amber-500" />,
                img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Agrandissement & Ajouts",
                desc: "Besoin de plus d'espace? Nous créons des extensions harmonieuses qui valorisent votre propriété.",
                icon: <Ruler size={40} className="text-amber-500" />,
                img: "https://images.unsplash.com/photo-1545731936-a197771746f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                title: "Rénovation Majeure",
                desc: "Modernisez votre intérieur avec nos services de rénovation complète. Cuisine, salle de bain, sous-sol.",
                icon: <HardHat size={40} className="text-amber-500" />,
                img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((service, idx) => (
              <div key={idx} className="group flex flex-col bg-slate-50 border border-slate-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10" />
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h4>
                  <p className="text-slate-600 mb-6 flex-grow">{service.desc}</p>
                  <Link to="/services" className="text-amber-500 font-bold inline-flex items-center gap-1 hover:text-amber-600 group-hover:gap-3 transition-all mt-auto">
                    En savoir plus <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 opacity-[0.03] pointer-events-none">
          <HardHat size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-amber-500 rounded-sm p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-slate-900">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Prêt à commencer votre projet?</h2>
              <p className="text-xl text-slate-800 font-medium">
                Contactez l'équipe d'EZ Select Concept pour une consultation initiale gratuite. Nous construirons l'avenir ensemble.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="bg-slate-900 text-white font-bold text-lg py-4 px-8 rounded-sm hover:bg-slate-800 transition-colors text-center whitespace-nowrap">
                Demander une soumission
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
