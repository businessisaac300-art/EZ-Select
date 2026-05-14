import { ReactNode } from 'react';

export default function PageLayout({ 
  title, 
  subtitle, 
  children,
  headerImage = "https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
}: { 
  title: string; 
  subtitle?: string; 
  children: ReactNode;
  headerImage?: string;
}) {
  return (
    <div className="w-full pt-20">
      {/* Page Header */}
      <div className="relative bg-slate-900 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img src={headerImage} alt="Construction banner" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-slate-900 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">{title}</h1>
          {subtitle && (
            <p className="mt-4 text-xl text-amber-500 font-medium max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      {/* Page Content */}
      <div className="py-16 md:py-24">
        {children}
      </div>
    </div>
  );
}
