export default function Profile() {
  return (
    <section id="profile" className="bg-cream">

      {/* Section header */}
      <div className="max-w-6xl mx-auto px-6 pt-28 md:pt-36 pb-16 text-center">
        <h2 className="font-serif text-ink text-3xl md:text-4xl mb-4">
          Profile
        </h2>
        <p className="font-display italic text-gold tracking-[0.25em] text-sm">
          プロフィール
        </p>
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
            <p>大学卒業後、愛知の自動車部品メーカーに設計職として入社。</p>
            <p>2年半弱で退職しセブ島へ語学留学。帰国後、未経験からプログラミングを独学し、コロナ初期にエンジニアへ転職。</p>
            <p>数年後に独立。フルリモートを活かし、1年間で国内約20都道府県・海外5ヶ国を巡るノマド生活を経験。</p>
            <p>現在は博多に移住して、コーチングとエンジニアを軸に活動中。</p>
          </div>
        </div>

        {/* ストーリー */}
        <div className="mb-10">
          <h3 className="font-serif text-ink text-lg mb-5">ストーリー</h3>
          <div className="space-y-4 font-sans text-ink-muted text-sm leading-relaxed">
            <p>
              新卒で入社した会社で、「仕事=我慢」という価値観を持つ人が多く、違和感を覚えながらも当時はそれが「普通で当たり前」と思っていました。
              その後身の回りで不幸が重なり、当たり前だと思っていた日常が突然無くなる経験をして、「本当にやりたいことは何か？」と問うようになりました。
            </p>
            <p>
              会社や友達の誘いを断り、1人で考える時間を作りましたが、答えは出ず時間ばかり過ぎていくことに焦りを感じ、思い切って退職してセブ島に語学留学へ。
              セブのストリートで暮らす子供を見たり、他国の話を見聞きする中で、日本の恵まれた環境で失敗を恐れて何もしないのは勿体ないと強く感じました。
            </p>
            <p>
              1人でも多くの人に何かやりたいことがあるなら挑戦して欲しいと思いましたが、それを言う人が何か達成したことがないと説得力がないと思ったのと、自分自身ももっと自分の世界を広げたいという思いから、未経験かつ独学で始められて、3年以内にリモートで高収入を得られるエンジニアを目指すことにしました。
              結果として当初の目標は想定よりも早く達成でき、本来やりたかった人のキャリアに関わる仕事のために、コーチングを学び始めました。
            </p>
            <p>
              振り返ると、やりたいことを見つけるまでに、長い間1人で悩み続けましたが、もし当時に適切なサポートがあれば、もっと早く見つけられたのではないかと思っています。
              同じように悩む人が自分の答えに気づき、一歩踏み出せるようなサポートをしたい。そんな想いで、2025年からコーチングを学習し、現在はコーチングとエンジニアを軸に活動中です。
            </p>
            <p>
              コーチングに辿り着いた詳しい経緯や、学習の記録などは
              <a href="https://note.com/fumi23_engineer" className="text-gold" target="_blank" rel="noopener noreferrer">Noteの投稿</a>
              をご覧ください。
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
              <p>MBTI: ENFJ(主人公)</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
