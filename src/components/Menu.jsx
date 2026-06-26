const products = [
  {
    id: 1,
    name: 'Qəhvəyi Şəkər Boba Fırtınası',
    price: '6.50 AZN',
    image: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=600&auto=format&fit=crop',
    alt: 'Qəhvəyi Şəkər Boba Fırtınası',
    badge: 'Bestseller',
    badgeColor: 'bg-[#ffb7cb] text-[#5c1d2e]',
    bgColor: 'bg-black',
  },
  {
    id: 2,
    name: 'Çiyələkli Bulud Şeyk',
    price: '7.00 AZN',
    image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=600&auto=format&fit=crop',
    alt: 'Çiyələkli Bulud Şeyk',
    badge: null,
    bgColor: 'bg-[#ffe8ec]',
  },
  {
    id: 3,
    name: 'Manqo Partlayış Çayı',
    price: '6.00 AZN',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop',
    alt: 'Manqo Partlayış Çayı',
    badge: null,
    bgColor: 'bg-[#ffb84d]',
  },
]

export default function Menu() {
  return (
    <section id="menu" className="max-w-6xl mx-auto px-3 py-4">
      <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xs border border-[#eeebe3]">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-black text-[#111]">Ən Çox Sevilənlər</h2>
          <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest font-semibold">Bizim əsas ulduzlarımız. Asılılıq yaratmağa hazırdırlar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((product) => (
            <div key={product.id} className="group bg-[#fdfcf9] rounded-2xl overflow-hidden border border-[#ede9e0] hover:border-gray-300 transition duration-300">
              <div className={`h-56 overflow-hidden ${product.bgColor} relative`}>
                {product.badge && (
                  <span className={`absolute top-2 right-2 ${product.badgeColor} text-[8px] font-bold px-2 py-0.5 rounded-full z-10 uppercase tracking-wider`}>
                    {product.badge}
                  </span>
                )}
                <img src={product.image} alt={product.alt} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xs text-[#1a110b]">{product.name}</h3>
                <div className="mt-3">
                  <span className="text-xs font-black text-[#724629]">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
