import PageLayout from '../components/PageLayout';
import { Target, Shield, Users, Trophy } from 'lucide-react';

export default function About() {
  return (
    <PageLayout 
      title="À Propos de Nous" 
      subtitle="Bâtir aujourd'hui l'héritage de demain"
      headerImage="https://images.unsplash.com/photo-1504307651254-35680f356bfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6 font-headings">L'histoire de EZ Select Concept</h2>
            <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
              <p>
                Située à Lacolle, au Québec, EZ Select Concept s'est imposée comme un constructeur résidentiel de confiance. Nous avons construit notre réputation sur un engagement inébranlable envers la qualité, l'intégrité et la satisfaction de nos clients.
              </p>
              <p>
                Qu'il s'agisse d'une construction neuve, d'un agrandissement ou d'une rénovation majeure, notre équipe de professionnels passionnés met son expertise à votre service pour réaliser des projets qui dépassent vos attentes.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-amber-500 translate-x-4 translate-y-4 rounded-sm" />
            <img 
              src="https://images.unsplash.com/photo-1620641788421-bca1d2298cce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="L'équipe au travail" 
              className="relative z-10 w-full h-[500px] object-cover rounded-sm border-4 border-white shadow-xl"
            />
          </div>
        </div>

        {/* Valeurs */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Nos Valeurs Fondamentales</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Excellence",
              desc: "Nous visons rien de moins que l'excellence dans chaque détail de nos constructions.",
              icon: <Trophy size={40} className="text-amber-500" />
            },
            {
              title: "Transparence",
              desc: "Une communication claire et honnête avec nos clients à chaque étape du projet.",
              icon: <Target size={40} className="text-amber-500" />
            },
            {
              title: "Fiabilité",
              desc: "Nous respectons nos échéanciers et nos budgets, avec intégrité et professionnalisme.",
              icon: <Shield size={40} className="text-amber-500" />
            },
            {
              title: "Collaboration",
              desc: "Nous travaillons main dans la main avec vous pour concrétiser votre vision.",
              icon: <Users size={40} className="text-amber-500" />
            }
          ].map((valeur, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-sm border border-slate-100 text-center hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-6">{valeur.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{valeur.title}</h3>
              <p className="text-slate-600">{valeur.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
