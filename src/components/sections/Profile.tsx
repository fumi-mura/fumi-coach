const hobbies = [
  { icon: "✈", label: "一人旅" },
  { icon: "🏀", label: "バスケ" },
  { icon: "📖", label: "読書" },
  { icon: "🏋", label: "筋トレ" },
  { icon: "🚶", label: "散歩" },
  { icon: "🐕", label: "犬" },
  { icon: "🧖", label: "サウナ" },
  { icon: "🧘", label: "瞑想" },
];

const diagnoses = [
  {
    name: "ストレングスファインダー",
    result: "最上志向 / 戦略性 / 個別化 / 学習欲 / 着想",
    note: "「強みを伸ばす」ことへの強いこだわりがあります。",
  },
  {
    name: "FFS診断",
    result: "保全性 強め",
    note: "丁寧さと安定性を大切にしながら関係を築きます。",
  },
  {
    name: "キャリアアンカー",
    result: "専門・職能別コンピタンス",
    note: "特定の分野を深く極めることに喜びを感じます。",
  },
  {
    name: "MBTI",
    result: "INFJ",
    note: "共感力と洞察力で、相手の可能性を見出します。",
  },
];

export default function Profile() {
  return (
    <section id="profile" className="bg-cream">

      {/* Section header */}
      <div className="max-w-6xl mx-auto px-6 pt-28 md:pt-36 pb-16 text-center">
        <p className="font-display italic text-gold tracking-[0.25em] text-sm mb-4">
          PROFILE
        </p>
        <h2 className="font-serif text-ink text-3xl md:text-4xl">
          プロフィール
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mt-8" />
      </div>

      {/* ── 1. 写真 + ストーリー + 趣味 ── */}
      <div className="max-w-2xl mx-auto px-6 pb-20 md:pb-28">
        {/* Photo */}
        <div className="aspect-[3/2] bg-border/60 rounded-sm overflow-hidden flex items-center justify-center mb-10">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-border mx-auto mb-4 flex items-center justify-center">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-ink-faint">
                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" strokeWidth="1.5" />
                <path d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <p className="font-sans text-ink-faint text-xs">Photo</p>
          </div>
        </div>

        {/* Story */}
        <div className="space-y-5 font-sans text-ink-muted text-base leading-relaxed mb-8">
          <p>
            20代中盤、身の回りで不幸が重なることがありました。
            それまで当たり前だった日常が、突然崩れていく感覚。そのとき初めて、「自分は本当に何がしたいのか？」という問いと真剣に向き合うことになりました。
          </p>
          <p>
            約1年間、誘いを断っては一人で考える時間を作り続けました。
            命の儚さを実感するほど、「今しかできないことがある」という感覚が強くなっていきました。
          </p>
          <p>
            その問いの末に辿り着いたのが、キャリアや人生の選択に悩む人を支えることでした。
            コーチングという手法に出会い、「答えを教えるのではなく、相手の中にある答えを引き出す」このアプローチこそが自分の使命だと確信しました。
          </p>
          <p>
            現在はZaPASSコーチングアカデミーで学びながら、コーチとして活動しています。
          </p>
        </div>

        {/* Hobbies */}
        <div className="flex flex-wrap gap-2 mb-10">
          {hobbies.map((hobby) => (
            <span
              key={hobby.label}
              className="font-sans text-ink-faint text-xs border border-border px-3 py-1"
            >
              {hobby.icon} {hobby.label}
            </span>
          ))}
        </div>

        <p className="font-display italic text-gold text-4xl">fumi</p>
      </div>

      {/* ── 3. 診断結果 ── */}
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <h3 className="font-serif text-ink text-2xl md:text-3xl mb-12 text-center">
          診断結果
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diagnoses.map((d) => (
            <div key={d.name} className="border border-border p-8 hover:border-gold transition-colors duration-300">
              <p className="font-display italic text-gold text-sm tracking-wider mb-3">
                {d.name}
              </p>
              <p className="font-serif text-ink text-base mb-3">{d.result}</p>
              <p className="font-sans text-ink-faint text-xs leading-relaxed">{d.note}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
