const credentials = [
  "ICF認定コーチ（国際コーチング連盟）",
  "コーチング歴 5年、累計セッション数 300+",
  "元外資系企業 人材開発マネージャー",
];

export default function Profile() {
  return (
    <section id="profile" className="bg-cream py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[3/4] bg-border/60 rounded-sm overflow-hidden flex items-center justify-center max-w-sm mx-auto md:mx-0">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-border mx-auto mb-4 flex items-center justify-center">
                  <svg
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-ink-faint"
                  >
                    <path
                      d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M20 21C20 18.2386 16.4183 16 12 16C7.58172 16 4 18.2386 4 21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="font-sans text-ink-faint text-xs">Photo</p>
              </div>
            </div>
            {/* Decorative gold accent */}
            <div className="absolute -bottom-4 -right-4 md:-right-8 w-24 h-24 border border-gold/20 hidden md:block" />
          </div>

          {/* Text content */}
          <div>
            <p className="font-display italic text-gold tracking-[0.25em] text-sm mb-4">
              PROFILE
            </p>
            <h2 className="font-serif text-ink text-3xl md:text-4xl mb-8">
              コーチ fumi について
            </h2>
            <p className="font-sans text-ink-muted text-base leading-relaxed mb-5">
              外資系企業での人材開発・組織開発の経験を経て、個人のキャリアと人生に
              寄り添うコーチとして独立。「答えはあなたの中にある」という信念のもと、
              クライアント一人ひとりの可能性を引き出すセッションを行っています。
            </p>
            <p className="font-sans text-ink-muted text-base leading-relaxed mb-10">
              コーチングとは、評価せず、アドバイスせず、ただ純粋に相手の思考と
              感情に向き合う対話のプロセス。その場で生まれる気づきと行動が、
              あなたの人生を少しずつ、確かに変えていきます。
            </p>

            {/* Credentials */}
            <ul className="space-y-3 mb-10">
              {credentials.map((item) => (
                <li
                  key={item}
                  className="font-sans text-ink-muted text-sm flex items-start gap-3"
                >
                  <span className="text-gold mt-0.5 flex-shrink-0">—</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Signature */}
            <p className="font-display italic text-gold text-4xl">fumi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
