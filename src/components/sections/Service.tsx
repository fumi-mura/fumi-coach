const recommendedItems = [
  "本当にやりたいことが分からない",
  "転職・独立を考えているが、なかなか踏み出せない",
  "なんとなく毎日モヤっとしている感覚がある",
  "誰かに話を聞いてもらいながら、思考を整理したい",
];

const trialSteps = [
  { time: "15分", label: "自己紹介・コーチング概要説明" },
  { time: "20分", label: "セッション" },
  { time: "10分", label: "今後の説明・Q&A" },
];

export default function Service() {
  return (
    <section id="service" className="bg-surface">

      {/* Section header */}
      <div className="max-w-6xl mx-auto px-6 pt-28 md:pt-36 pb-16 text-center">
        <p className="font-display italic text-gold tracking-[0.25em] text-sm mb-4">
          SERVICES
        </p>
        <h2 className="font-serif text-ink text-3xl md:text-4xl">
          サービス
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mt-8" />
      </div>

      {/* ── 1. コーチングとは ── */}
      <div className="max-w-3xl mx-auto px-6 pb-20 md:pb-28">
        <h3 className="font-serif text-ink text-2xl md:text-3xl mb-8 text-center">
          コーチングとは
        </h3>
        <div className="space-y-5 font-sans text-ink-muted text-base leading-relaxed">
          <p>
            コーチングとは、コーチとの対話を通じて、あなたの中にある答えを引き出すプロセスです。
            アドバイスや指示をするのではなく、傾聴と問いかけによって、あなた自身が気づき、選択し、行動できるようサポートします。
          </p>
          <p>
            「どうしたいのか」「何が大切なのか」— そうした自分の声は、日常の忙しさの中で埋もれてしまいがちです。
            コーチングは、その声を丁寧に掘り起こし、理想の未来へ向けた一歩を踏み出す場です。
          </p>
          <p>
            ティーチングやカウンセリングとは異なり、コーチングは「未来と可能性」にフォーカスします。
            あなたのリソースと強みを信じ、ともに歩むパートナーとして関わります。
          </p>
        </div>
      </div>

      {/* ── 2. こんな人におすすめ ── */}
      <div className="bg-cream py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="font-serif text-ink text-2xl md:text-3xl mb-12 text-center">
            こんな人におすすめ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendedItems.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-surface border border-border p-6"
              >
                <span className="font-display italic text-gold text-xl flex-shrink-0">
                  {i + 1}.
                </span>
                <p className="font-sans text-ink-muted text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. 流れ ── */}
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <h3 className="font-serif text-ink text-2xl md:text-3xl mb-14 text-center">
          流れ
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* 体験セッション */}
          <div className="border border-border p-8">
            <div className="flex items-baseline gap-3 mb-6">
              <h4 className="font-serif text-ink text-lg">体験セッション</h4>
              <span className="font-sans text-ink-faint text-sm">45分</span>
            </div>
            <div className="space-y-0">
              {trialSteps.map((step, i) => (
                <div key={i} className="flex gap-4">
                  {/* Timeline line */}
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0 mt-1" />
                    {i < trialSteps.length - 1 && (
                      <div className="w-px flex-1 bg-border my-1" />
                    )}
                  </div>
                  <div className="pb-6 -mt-0.5">
                    <p className="font-sans text-ink text-sm font-medium">
                      {step.label}
                    </p>
                    <p className="font-sans text-ink-faint text-xs mt-0.5">
                      {step.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 継続セッション */}
          <div className="border border-border p-8">
            <div className="flex items-baseline gap-3 mb-6">
              <h4 className="font-serif text-ink text-lg">継続セッション</h4>
              <span className="font-sans text-ink-faint text-sm">60分 / 1回</span>
            </div>
            <p className="font-sans text-ink-muted text-sm leading-relaxed">
              体験セッション後、継続を希望される方を対象にしたセッションです。
              目標の設定から行動計画、振り返りまで、継続的にサポートします。
              頻度・回数はご要望に合わせて柔軟に対応いたします。
            </p>
          </div>
        </div>

        {/* 料金 */}
        <div className="border border-gold/30 bg-cream p-6 text-center">
          <p className="font-sans text-ink-muted text-sm mb-2">
            <span className="text-gold font-medium">現在は無料</span>
            でご提供しています。
          </p>
          <p className="font-sans text-ink-faint text-xs">
            ※ 今後有料化予定（体験セッション 1,500円 / 継続セッション 3,000円）
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-gold text-white font-sans font-medium text-sm tracking-wider px-8 py-4 hover:bg-gold-dark transition-colors duration-300"
          >
            無料体験セッションを申し込む
          </a>
        </div>
      </div>

    </section>
  );
}
