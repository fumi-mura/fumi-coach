const services = [
  {
    numeral: "I",
    title: "キャリアコーチング",
    description:
      "転職・昇進・独立など、仕事とキャリアに関する課題を深く探求します。自分の強みと価値観を明確にし、納得のいく選択へと導きます。",
  },
  {
    numeral: "II",
    title: "ライフコーチング",
    description:
      "人生全体を俯瞰し、理想の未来から逆算した目標設定と行動計画をともに作ります。仕事・家族・自己成長のバランスを整えます。",
  },
  {
    numeral: "III",
    title: "単発セッション",
    description:
      "特定の課題や悩みに集中した60分の集中セッション。すぐに動き出したい方、まずは試してみたい方に最適なプログラムです。",
  },
];

export default function Service() {
  return (
    <section id="service" className="bg-surface py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-display italic text-gold tracking-[0.25em] text-sm mb-4">
            SERVICES
          </p>
          <h2 className="font-serif text-ink text-3xl md:text-4xl mb-6">
            コーチングとは
          </h2>
          <p className="font-sans text-ink-muted text-base leading-relaxed max-w-xl mx-auto">
            コーチングは、答えを「教える」のではなく、あなたの中にある答えを
            「引き出す」プロセスです。対話を通じて思考を整理し、行動へとつなげます。
          </p>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.numeral}
              className="bg-cream border border-border p-8 hover:border-gold hover:shadow-md transition-all duration-300 group"
            >
              <span className="block font-display italic text-gold text-5xl mb-6 group-hover:text-gold-dark transition-colors duration-300">
                {service.numeral}
              </span>
              <h3 className="font-serif text-ink text-lg mb-4">
                {service.title}
              </h3>
              <p className="font-sans text-ink-muted text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-block font-sans text-gold text-sm tracking-wider border-b border-gold/40 hover:border-gold pb-0.5 transition-colors duration-300"
          >
            まずは無料体験セッションへ →
          </a>
        </div>
      </div>
    </section>
  );
}
