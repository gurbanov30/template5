export default function Hero() {
  return (
    <div className="text-center pt-16 pb-24 md:pt-24 md:pb-32 max-w-xl mx-auto">
      <h1 className="text-3xl md:text-[2.75rem] font-black tracking-tight text-[#1a110b] leading-none">
        Sadəcə bir içki deyil.<br />
        <span className="text-[#724629] relative inline-block">
          Əsl asılılıqdır.
        </span>
      </h1>

      <p className="mt-4 text-[11px] md:text-xs text-[#4a3b30] max-w-sm mx-auto font-medium leading-relaxed opacity-95">
        Şirin ehtiyacınızı tamamilə qarşılayacaq, hər qurtumda premium dad və təravət bəxş edən təzə hazırlanmış boba çayları və kokteyllər.
      </p>

      <div className="mt-6 flex justify-center gap-3">
        <a href="#menu" className="bg-[#f0e9dd]/80 text-[#333] text-[10px] font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#e4dbcc] transition backdrop-blur-xs">
          Menyunu Gör
        </a>
      </div>
    </div>
  )
}
