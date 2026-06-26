import { useState } from 'react'

export default function Subscription({ emailInput, setEmailInput, emailSubscribed, setEmailSubscribed }) {
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (emailInput.includes('@')) {
      setEmailSubscribed(true)
      setEmailInput('')
      setError('')
    } else {
      setError('E-poçt ünvanınızı daxil edin')
    }
  }

  return (
    <section id="subscribe" className="max-w-2xl mx-auto px-4 py-8 text-center">
      <h2 className="text-base md:text-lg font-black uppercase tracking-wider text-[#1a110b]">Bubble Kluba Qoşulun</h2>
      <p className="text-[10px] text-gray-400 mt-1 max-w-xs mx-auto leading-relaxed">Yeni dadlara, gizli menyu elementlərinə və ad gününüzə xüsusi pulsuz içkilərə ilk siz sahib olun.</p>

      <div className="mt-5 max-w-sm mx-auto flex items-center space-x-2 bg-white border border-[#eeebe3] rounded-full p-1 shadow-xs">
        <input
          type="email"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
          placeholder="E-poçt ünvanınız"
          className="bg-transparent pl-4 pr-2 py-1.5 text-[10px] w-full focus:outline-none text-[#1a110b]"
        />
        <button onClick={handleSubmit} className="bg-[#724629] text-white text-[9px] font-bold uppercase tracking-wider px-5 py-2 rounded-full hover:bg-[#5a361e] transition">
          Qoşul
        </button>
      </div>

      {error && (
        <p className="mt-2 text-[10px] font-bold text-red-500">{error}</p>
      )}

      {emailSubscribed && (
        <p className="mt-3 text-[10px] font-bold text-emerald-600">
          🎉 Təbriklər! Kluba uğurla qoşuldunuz.
        </p>
      )}
    </section>
  )
}
