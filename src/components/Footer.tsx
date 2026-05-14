import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Hammer } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 border-t-[6px] border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-amber-500 text-white p-2 rounded-lg">
                <Hammer size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold uppercase tracking-wider text-white leading-none">EZ Select</span>
                <span className="text-xs text-amber-500 font-semibold tracking-widest pl-[1px]">CONCEPT</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Nous sommes des experts en construction résidentielle, dédiés à transformer vos rêves architecturaux en réalité avec des matériaux de qualité et un savoir-faire inégalé.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-amber-500 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 select-none uppercase tracking-wider">Liens Rapides</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-amber-500 transition-colors">Accueil</Link></li>
              <li><Link to="/a-propos" className="text-slate-400 hover:text-amber-500 transition-colors">À Propos</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-amber-500 transition-colors">Nos Services</Link></li>
              <li><Link to="/realisations" className="text-slate-400 hover:text-amber-500 transition-colors">Réalisations</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-amber-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 select-none uppercase tracking-wider">Nos Services</h4>
            <ul className="space-y-3">
              <li className="text-slate-400">Construction Neuve</li>
              <li className="text-slate-400">Agrandissement</li>
              <li className="text-slate-400">Rénovation Majeure</li>
              <li className="text-slate-400">Finition Intérieure</li>
              <li className="text-slate-400">Gestion de Projet</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 select-none uppercase tracking-wider">Contactez-nous</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-amber-500 shrink-0 mt-1" size={20} />
                <span className="text-slate-400">
                  4 Rue du Parc Industriel,<br />
                  Lacolle, QC J0J 1J0<br />
                  <span className="text-xs opacity-60">3JFJ+PV Lacolle, Québec</span>
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-amber-500 shrink-0" size={20} />
                <a href="tel:+915147776717" className="text-slate-400 hover:text-white transition-colors">+91 5147 776 717</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-amber-500 shrink-0" size={20} />
                <a href="mailto:info@ezselectconcept.ca" className="text-slate-400 hover:text-white transition-colors">info@ezselectconcept.ca</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} EZ Select Concept. Tous droits réservés.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-amber-500 transition-colors">Politique de confidentialité</a>
            <span>|</span>
            <a href="#" className="hover:text-amber-500 transition-colors">Termes et conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
