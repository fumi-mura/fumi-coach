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

      <div className="max-w-2xl mx-auto px-6 pb-28">
        {/* Photo */}
        <div className="aspect-[3/2] rounded-sm overflow-hidden mb-4">
          <img
            src="/IMG_6408.jpg"
            alt="fumi"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Signature */}
        <p className="font-display italic text-gold text-2xl text-center mb-10">fumi</p>

        {/* 経歴 */}
        <div className="mb-10">
          <h3 className="font-serif text-ink text-lg mb-5">経歴</h3>
          <div className="space-y-3 font-sans text-ink-muted text-sm leading-relaxed">
            <p>愛知出身、博多在住</p>
            <p>大学卒業後、地元の車部品メーカーに設計職として入社。</p>
            <p>退職後にセブ島へ語学留学。帰国後、未経験からプログラミングを独学し、コロナ初期にエンジニアへ転職。</p>
            <p>数年後に独立。フルリモートを活かし、1年間で国内約20都道府県・海外5ヶ国を巡るノマド生活を経験。</p>
            <p>現在は博多に移住して、エンジニアとコーチングを軸に活動中。</p>
          </div>
        </div>

        {/* ストーリー */}
        <div className="mb-10">
          <h3 className="font-serif text-ink text-lg mb-5">ストーリー</h3>
          <div className="space-y-5 font-sans text-ink-muted text-sm leading-relaxed">
            <p>
              新卒で入社した会社で
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
            <p>
              コーチングに辿り着いた詳しい経緯や、学習の記録などは<a href="https://note.com/fumi23_engineer" className="text-gold" target="_blank" rel="noopener noreferrer"> Noteの投稿 </a> をご覧ください。
            </p>
          </div>
        </div>

        {/* Hobbies & Self-understanding */}
        <div className="space-y-4 font-sans text-sm text-ink-muted mb-12">
          <div className="flex gap-3">
            <span className="text-ink-faint flex-shrink-0">趣味</span>
            <span>旅行、バスケ、読書、筋トレ、散歩、犬、サウナ</span>
          </div>
          <div className="flex gap-3">
            <span className="text-ink-faint flex-shrink-0">自己理解</span>
            <div className="space-y-1">
              <p>ストレングスファインダー: 目標志向・達成欲・共感性・社交性・学習欲</p>
              <p>FFS診断: 需要・拡散</p>
              <p>キャリアアンカー: 自立・独立</p>
              <p>MBTI: ENFJ（主人公）</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
