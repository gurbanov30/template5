const testimonials = [
  {
    name: 'TAYLAH L.',
    text: '"Həqiqətən həftədə 4 dəfə bura gəlirəm. Mənə kömək edin (yaxud daha çox boba göndərin)."',
  },
  {
    name: 'MIKEY T.',
    text: '"Qəhvəyi Şəkər Fırtınası mənim üçün bütün digər boba çaylarını kölgədə qoydu. Mükəmməldir."',
  },
  {
    name: 'PETER C.',
    text: '"Estetika 10/10, içkilər isə 11/10-dur. Şəhərdəki ən yaxşı ab-hava buradadır."',
  },
]

export default function Testimonials() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-6 bg-[#f7f4ee] rounded-3xl border border-[#ede9df] my-4">
      <div className="text-center mb-6">
        <h2 className="text-xs font-black uppercase tracking-widest text-[#1a110b]">Hər kəs bundan danışır</h2>
        <p className="text-[9px] text-gray-400 mt-0.5 uppercase tracking-widest font-semibold">Müştərilərimizin səmimi şərhləri</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-xl p-4 border border-[#ede9df] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex space-x-0.5 text-[#724629] text-[9px] mb-2">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <p className="text-[10px] text-gray-500 italic leading-relaxed">{testimonial.text}</p>
            </div>
            <div className="mt-3 border-t border-gray-50 pt-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
              — {testimonial.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
