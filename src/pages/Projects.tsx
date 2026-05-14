import PageLayout from '../components/PageLayout';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Maison Moderne sur Mesure",
      category: "Construction Neuve",
      location: "Région de Montérégie",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Rénovation Cuisine à Aire Ouverte",
      category: "Rénovation",
      location: "Saint-Jean-sur-Richelieu",
      img: "https://images.unsplash.com/photo-1556910103-1c02745a872f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Agrandissement Latéral",
      category: "Agrandissement",
      location: "Lacolle",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Finition Sous-sol Complet",
      category: "Rénovation",
      location: "Région de Montérégie",
      img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 5,
      title: "Construction Style Farmhouse",
      category: "Construction Neuve",
      location: "Hemmingford",
      img: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 6,
      title: "Salle de Bain Maître",
      category: "Rénovation",
      location: "Lacolle",
      img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <PageLayout 
      title="Nos Réalisations" 
      subtitle="Un aperçu de notre savoir-faire en construction et rénovation"
      headerImage="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filtres (statiques pour le design) */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {["Tous", "Construction Neuve", "Rénovation", "Agrandissement"].map((cat, idx) => (
            <button 
              key={idx} 
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                idx === 0 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-sm cursor-pointer border border-slate-100 shadow-sm hover:shadow-xl transition-all">
              <div className="h-72 overflow-hidden bg-slate-900">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:opacity-60 transition-all duration-500" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-amber-400 text-sm font-bold tracking-wider uppercase mb-1">{project.category}</span>
                <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-slate-300 text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </PageLayout>
  );
}
