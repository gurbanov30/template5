import { useState } from 'react'

const links = [
  { href: '#menu', label: 'Menyu' },
  { href: '#about', label: 'Hekayəmiz' },
  { href: '#reviews', label: 'Vibe Check' },
  { href: '#contact', label: 'Əlaqə' },
]

export default function Navbar({ cartCount, resetCart }) {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <nav className="py-5 flex items-center">
      <div className="flex-1 flex justify-start">
        <a href="#" className="text-sm font-black tracking-tight text-[#1a110b] hover:opacity-80 transition flex items-center gap-1.5">
          <span className="text-xs">🧋</span>
          <span>Your Brand Here</span>
        </a>
      </div>

      <div className="hidden md:flex items-center justify-center flex-1 space-x-8 text-[11px] font-semibold uppercase tracking-wider text-[#4a3a2e]">
        <a href="#menu" className="hover:text-black transition">Menyu</a>
        <a href="#about" className="hover:text-black transition">Hekayəmiz</a>
        <a href="#reviews" className="hover:text-black transition">Vibe Check</a>
        <a href="#contact" className="hover:text-black transition">Əlaqə</a>
      </div>

      <div className="flex-1 flex justify-end items-center space-x-4">
        <div className="relative text-xs cursor-pointer text-[#4a3a2e]" onClick={resetCart}>
          <i className="fa-solid fa-bag-shopping text-sm"></i>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#00ffd5] text-black font-bold text-[9px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce">
              {cartCount}
            </span>
          )}
        </div>
        <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden text-[#1a110b] p-1 relative w-6 h-6 flex items-center justify-center">
          <i className={`fa-solid transition-all duration-300 ${mobileMenu ? 'fa-xmark text-sm rotate-90' : 'fa-bars text-sm'}`}></i>
        </button>
      </div>

      <div
        className={`absolute top-16 left-3 right-3 md:hidden z-50 transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenu ? 'max-h-80 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-[#eddcc4]/80 backdrop-blur-xl rounded-2xl p-3 shadow-lg border border-[#dccbb0]/50">
          <div className="flex flex-col space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                onClick={() => setMobileMenu(false)}
                href={link.href}
                className="text-xs font-semibold text-[#3d2c1e] py-3 px-3 rounded-xl hover:bg-[#dccbb0]/50 hover:translate-x-1 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
