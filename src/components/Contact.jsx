export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-3 py-6">
      <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xs border border-[#eeebe3]">
        <div className="text-center mb-6">
          <h2 className="text-base md:text-lg font-black uppercase tracking-wider text-[#1a110b]">Əlaqə</h2>
          <p className="text-[9px] text-gray-400 mt-0.5 uppercase tracking-widest font-semibold">Bizimlə əlaqə saxlayın</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 bg-[#fdfcf9] rounded-xl p-4 border border-[#ede9e0]">
              <div className="w-9 h-9 rounded-full bg-[#a3fff0] flex items-center justify-center text-sm">📞</div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">Telefon</p>
                <a href="tel:+994501234567" className="text-xs font-bold text-[#1a110b] hover:text-[#724629] transition">+994 50 123 45 67</a>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-[#fdfcf9] rounded-xl p-4 border border-[#ede9e0]">
              <div className="w-9 h-9 rounded-full bg-[#ffd6df] flex items-center justify-center text-sm">📧</div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400">E-poçt</p>
                <a href="mailto:info@yourbrand.az" className="text-xs font-bold text-[#1a110b] hover:text-[#724629] transition">info@yourbrand.az</a>
              </div>
            </div>

            <div className="bg-[#fdfcf9] rounded-xl p-4 border border-[#ede9e0]">
              <p className="text-[9px] font-bold uppercase tracking-wider text-gray-400 mb-2">Sosial Şəbəkələr</p>
              <div className="flex space-x-3">
                <a href="#" className="w-9 h-9 rounded-full bg-[#1a110b] text-white flex items-center justify-center text-xs hover:bg-[#724629] transition"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#1a110b] text-white flex items-center justify-center text-xs hover:bg-[#724629] transition"><i className="fa-brands fa-whatsapp"></i></a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#1a110b] text-white flex items-center justify-center text-xs hover:bg-[#724629] transition"><i className="fa-brands fa-tiktok"></i></a>
                <a href="#" className="w-9 h-9 rounded-full bg-[#1a110b] text-white flex items-center justify-center text-xs hover:bg-[#724629] transition"><i className="fa-brands fa-telegram"></i></a>
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-[#ede9e0] h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.419!2d49.867!3d40.4096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI0JzM0LjYiTiA0OcKwNTInMDEuMiJF!5e0!3m2!1saz!2saz!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BobaVibe location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
