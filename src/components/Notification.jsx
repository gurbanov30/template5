export default function Notification({ show }) {
  if (!show) return null

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-black text-white rounded-lg px-4 py-2.5 shadow-lg border border-stone-800 text-[10px] font-bold uppercase tracking-wider flex items-center space-x-2">
        <span>✅</span>
        <span>İçki uğurla səbətə atıldı!</span>
      </div>
    </div>
  )
}
