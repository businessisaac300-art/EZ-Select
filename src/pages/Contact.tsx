import PageLayout from '../components/PageLayout';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation:
    alert('Merci pour votre message ! Notre équipe vous contactera sous peu.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <PageLayout 
      title="Contactez-nous" 
      subtitle="Faites le premier pas vers votre nouvelle maison"
      headerImage="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          
          {/* Informations de contact */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Discutons de votre projet</h2>
              <p className="text-slate-600 mb-8">
                L'équipe de EZ Select Concept est prête à répondre à toutes vos questions et à évaluer vos besoins. Contactez-nous dès aujourd'hui pour planifier une rencontre.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <MapPin className="text-amber-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Notre Adresse</h4>
                  <p className="text-slate-600 mt-1">
                    4 Rue du Parc Industriel,<br />
                    Lacolle, QC J0J 1J0<br />
                    <span className="text-sm text-slate-400">3JFJ+PV Lacolle, Québec</span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Phone className="text-amber-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Téléphone</h4>
                  <p className="mt-1">
                    <a href="tel:+915147776717" className="text-slate-600 hover:text-amber-500 transition-colors">+91 5147 776 717</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Mail className="text-amber-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Courriel</h4>
                  <p className="mt-1">
                    <a href="mailto:info@ezselectconcept.ca" className="text-slate-600 hover:text-amber-500 transition-colors">info@ezselectconcept.ca</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                  <Clock className="text-amber-600" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900">Heures d'ouverture</h4>
                  <p className="text-slate-600 mt-1">Lundi au Vendredi: 8h00 - 17h00<br />Samedi et Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-[0_0_40px_rgba(0,0,0,0.05)] border border-slate-100 p-8 md:p-10">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Demande de Renseignements</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nom complet *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Téléphone *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                      placeholder="(514) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Courriel *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                    placeholder="jean@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">Service souhaité</label>
                  <select 
                    id="service" 
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors bg-white"
                  >
                    <option value="">Sélectionnez un service</option>
                    <option value="Construction Neuve">Construction Neuve</option>
                    <option value="Agrandissement">Agrandissement</option>
                    <option value="Rénovation Majeure">Rénovation Majeure</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Détails de votre projet *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-y"
                    placeholder="Décrivez votre projet ici..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-amber-500 text-white font-bold py-4 px-8 rounded-sm hover:bg-amber-600 transition-colors shadow-md"
                >
                  Envoyer la demande
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="mt-16 bg-slate-200 rounded-sm overflow-hidden h-[400px] w-full relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.428488349079!2d-73.3752538!3d45.034509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc9c08a543328e3%3A0xe54e616fd1fabbff!2s4%20Rue%20du%20Parc%20Industriel%2C%20Lacolle%2C%20QC%20J0J%201J0!5e0!3m2!1sfr!2sca!4v1700000000000!5m2!1sfr!2sca" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte d'accès - Lacolle"
            className="absolute inset-0"
          ></iframe>
        </div>

      </div>
    </PageLayout>
  );
}
