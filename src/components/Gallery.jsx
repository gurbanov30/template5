const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop',
    alt: 'Your Brand Here Kafe Estetikası',
  },
  {
    src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
    alt: 'Boba ilə xoş anlar',
  },
  {
    src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop',
    alt: 'Aesthetic boba drink closer',
  },
]

export default function Gallery() {
  return (
    <section id="reviews" className="max-w-6xl mx-auto px-3 py-6">
      <div className="text-center mb-6">
        <h2 className="text-base md:text-lg font-black uppercase tracking-wider text-[#1a110b]">Atmosfer Yoxlanışı</h2>
        <p className="text-[9px] text-gray-400 mt-0.5 uppercase tracking-widest font-semibold">Bizimlə o xüsusi hissi yaşayın</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="rounded-2xl overflow-hidden h-48 md:h-56 relative group border border-[#eeebe3]">
            <img src={image.src} alt={image.alt} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        ))}
      </div>
    </section>
  )
}
