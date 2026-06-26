const features = [
  {
    emoji: '💎',
    bg: 'bg-[#ffd6df]',
    title: 'Premium Tərkib',
    description: 'Qlobal səviyyədə seçilən, yerli və təzə hazırlanan boba inciləri.',
  },
  {
    emoji: '🍊',
    bg: 'bg-[#ffdcc2]',
    title: 'Təzə Hazırlanmış',
    description: 'Mükəmməl məxməri köpük qatı üçün hər sifariş fərdi şəkildə hazırlanır.',
  },
  {
    emoji: '💚',
    bg: 'bg-[#a3fff0]',
    title: 'Dad Asılılığı',
    description: 'Həqiqi dad balansını tapmaq üçün yüzlərlə sınaqdan keçmiş xüsusi reseptlər.',
  },
  {
    emoji: '⚡',
    bg: 'bg-[#e2e1ff]',
    title: 'Sürətli Təhvil',
    description: 'Növbə gözləmədən əvvəlcədən onlayn sifariş edin və dərhal götürün.',
  },
]

export default function Features() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`w-9 h-9 rounded-full ${feature.bg} flex items-center justify-center text-xs shadow-xs mb-2`}>
              {feature.emoji}
            </div>
            <h4 className="text-[10px] font-bold text-[#111] uppercase tracking-wider">{feature.title}</h4>
            <p className="text-[9px] text-gray-400 mt-1 max-w-[140px] leading-normal mx-auto">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
