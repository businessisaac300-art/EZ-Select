import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Hammer, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/a-propos' },
    { name: 'Services', path: '/services' },
    { name: 'Réalisations', path: '/realisations' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-amber-500 text-white p-2 rounded-lg group-hover:bg-amber-600 transition-colors">
            <Hammer size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold uppercase tracking-wider text-slate-800 leading-none">EZ Select</span>
            <span className="text-xs text-amber-500 font-semibold tracking-widest pl-[1px]">CONCEPT</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium uppercase tracking-wider transition-colors hover:text-amber-500 ${
                      isActive ? 'text-amber-500' : 'text-slate-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href="tel:+915147776717"
            className="hidden lg:flex items-center gap-2 bg-slate-900 text-white px-5 py-2 hover:bg-amber-500 transition-colors text-sm font-medium rounded-sm"
          >
            <Phone size={16} />
            <span>+91 5147 776 717</span>
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-slate-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <ul className="flex flex-col py-4 px-4 sm:px-6 gap-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block text-lg font-medium py-2 border-b border-gray-50 ${
                        isActive ? 'text-amber-500' : 'text-slate-800'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="tel:+915147776717"
                  className="flex items-center justify-center gap-2 bg-amber-500 text-white px-5 py-3 rounded-sm font-medium"
                >
                  <Phone size={18} />
                  <span>+91 5147 776 717</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
