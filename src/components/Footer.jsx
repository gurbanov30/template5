export default function Footer() {
  return (
    <footer className="bg-[#1e140d] text-[#f7f4ee]/80 py-8 border-t border-[#33251c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[#33251c] pb-6">
          <a href="#" className="text-sm font-black text-white flex items-center gap-1">
            <span className="text-xs">🧋</span>
            <span>Your Brand Here</span>
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-[9px] uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition">Gizlilik Siyasəti</a>
            <a href="#" className="hover:text-white transition">İstifadə Şərtləri</a>
            <a href="#" className="hover:text-white transition">Karyera</a>
            <a href="#" className="hover:text-white transition">Əlaqə</a>
          </div>

          <div className="text-[9px] text-gray-500 uppercase tracking-wider">
            © 2026 Your Brand Here. Həmişə Pozitiv Qalın.
          </div>
        </div>
      </div>
    </footer>
  )
}
