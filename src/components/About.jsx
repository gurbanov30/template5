export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-3 py-4">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-stone-900 to-stone-800 border border-stone-800 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="h-64 md:h-80 overflow-hidden relative">
            <img src="https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=800&auto=format&fit=crop" alt="Əsl Boba Craftı" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="bg-[#bca693] p-8 md:p-12 text-[#23170e] flex flex-col justify-center h-full">
            <h3 className="text-lg md:text-xl font-black leading-tight tracking-tight uppercase">
              Hər qurtum unikal dad üçün hazırlanır.
            </h3>
            <p className="mt-3 text-[11px] leading-relaxed text-[#443224] font-medium opacity-95">
              Biz sadəcə içkiləri qarışdırmırıq, təcrübə yaradırıq. Mükəmməl bişmiş boba dənələrindən tutmuş, xüsusi süd qarışıqlarımızın məxməri teksturasına kəşf ediləcək çox şey var.
            </p>
            <div className="mt-5">
              <a href="#menu" className="inline-block border border-[#443224] text-[#443224] text-[9px] font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-[#443224] hover:text-[#bca693] transition duration-200">
                Hazırlanma Prosesimiz
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
