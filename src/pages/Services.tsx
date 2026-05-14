import PageLayout from '../components/PageLayout';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: "neuf",
      title: "Construction Neuve",
      desc: "De la conception des plans jusqu'à la remise des clés, nous prenons en charge la construction complète de votre maison. Nous construisons selon les normes les plus récentes pour garantir efficacité énergétique et durabilité.",
      features: ["Gestion de projet clé en main", "Sélection de matériaux premium", "Respect strict de l'échéancier", "Garantie de construction résidentielle"],
      img: "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "agrandissement",
      title: "Agrandissement et Ajouts",
      desc: "Vous manquez d'espace mais adorez votre quartier? L'agrandissement est la solution idéale. Que ce soit un ajout latéral, une extension arrière ou l'ajout d'un étage, nous intégrons la nouvelle structure harmonieusement à l'existante.",
      features: ["Analyse structurelle", "Design architectural harmonisé", "Permis et conformité", "Minimisation des perturbations"],
      img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "renovation",
      title: "Rénovation Majeure",
      desc: "Donnez une seconde vie à votre propriété. Nous sommes experts en rénovation complète : refonte de la cuisine, modernisation des salles de bain, finition de sous-sols et reconfiguration de l'espace habitable.",
      features: ["Démolition sécuritaire", "Refonte des systèmes plomberie/électricité", "Finition haut de gamme", "Valorisation de la propriété"],
      img: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <PageLayout 
      title="Nos Services" 
      subtitle="Expertise et savoir-faire pour votre projet résidentiel"
      headerImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              <div className="w-full lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500 translate-x-4 translate-y-4 rounded-sm" />
                  <img src={service.img} alt={service.title} className="relative z-10 w-full h-[400px] object-cover rounded-sm shadow-xl" />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-6">{service.title}</h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="bg-amber-100 p-1 rounded-full">
                        <Check className="text-amber-500" size={16} />
                      </div>
                      <span className="text-slate-700 font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-block bg-slate-900 text-white font-bold py-3 px-8 rounded-sm hover:bg-slate-800 transition-colors">
                  Demander une estimation
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
