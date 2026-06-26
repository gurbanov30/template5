import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[#724629] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#5a361e] ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Yuxarı qayıt"
    >
      <i className="fa-solid fa-chevron-up text-sm"></i>
    </button>
  )
}
