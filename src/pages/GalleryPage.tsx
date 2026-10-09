import React, { useState } from 'react';
import { X, Image as ImageIcon, ZoomIn, Download } from 'lucide-react';
import { CAMPUS_IMAGES } from '../data/mockData';

export const GalleryPage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string; category: string } | null>(null);

  const galleryItems = [
    {
      id: 'img-1',
      title: 'Academic Quad & Modern Building Facade',
      category: 'campus',
      src: CAMPUS_IMAGES.hero,
      aspect: '16:9',
    },
    {
      id: 'img-2',
      title: 'Central Digital Library Reading Amphitheater',
      category: 'library',
      src: CAMPUS_IMAGES.library,
      aspect: '4:3',
    },
    {
      id: 'img-3',
      title: 'Robotics & AI Innovation Workspace',
      category: 'labs',
      src: CAMPUS_IMAGES.engineeringLab,
      aspect: '4:3',
    },
    {
      id: 'img-4',
      title: 'Principal & Academic Council Boardroom',
      category: 'campus',
      src: CAMPUS_IMAGES.principal,
      aspect: '3:4',
    },
  ];

  const filteredItems = selectedFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <div className="space-y-12 py-8">
      {/* Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden border border-slate-800">
          <div className="relative z-10 max-w-3xl space-y-3">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
              Visual Archives
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white">
              Campus Life & Architecture Gallery
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore the picturesque grounds, high-tech research centers, academic amphitheaters, and cultural gatherings that define ABC College of Technology.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 p-1 bg-slate-100 rounded-xl max-w-md">
          {['all', 'campus', 'labs', 'library'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg capitalize transition-colors ${
                selectedFilter === cat
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {cat === 'all' ? 'All Images' : cat}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage({ src: item.src, caption: item.title, category: item.category })}
              className="group relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 cursor-pointer shadow-xs hover:shadow-xl transition-all"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400">
                  {item.category.toUpperCase()}
                </span>
                <h3 className="text-base font-bold font-display text-white mt-1 flex items-center justify-between">
                  <span>{item.title}</span>
                  <ZoomIn className="w-5 h-5 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl space-y-4 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between text-white pb-2 border-b border-slate-800 px-2">
              <span className="text-xs font-mono text-amber-400 uppercase">
                {lightboxImage.category}
              </span>
              <button
                onClick={() => setLightboxImage(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="max-h-[70vh] flex items-center justify-center overflow-hidden rounded-xl bg-black">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.caption}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="px-2 pt-1 text-center">
              <h4 className="text-sm font-bold text-white font-display">
                {lightboxImage.caption}
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
