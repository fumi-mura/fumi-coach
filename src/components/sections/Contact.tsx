
export default function Contact() {
  return (
    <section id="contact" className="bg-surface py-28 md:py-36">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <h2 className="font-serif text-ink text-3xl md:text-4xl mb-4">
            Contact
          </h2>
          <p className="font-display italic text-gold tracking-[0.25em] text-sm mb-6">
            お問い合わせ
          </p>
          <p className="font-sans text-ink-muted text-base leading-relaxed max-w-md mx-auto">
            体験セッションのお申し込み・ご質問は
            <br className="hidden md:block" />
            公式LINEからお気軽にどうぞ。
          </p>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>

        {/* LINE CTA */}
        <div className="text-center">
          <div>
            <a
              href="https://line.me/R/ti/p/@790jgpkd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#06C755] text-white font-sans font-medium text-sm tracking-wider px-10 py-4 hover:bg-[#05b34c] transition-colors"
            >
              {/* LINE icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.598 1.207 4.926 3.105 6.534L4.2 21.1a.5.5 0 0 0 .65.628l3.954-1.55A10.96 10.96 0 0 0 12 20.486c5.523 0 10-4.145 10-9.243S17.523 2 12 2zm-3.5 12.5h-1a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5zm7 0h-1a.5.5 0 0 1-.4-.2l-2.6-3.5V14a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .4.2l2.6 3.5V9a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5z"/>
              </svg>
              LINEで友だち追加
            </a>
          </div>
          <p className="font-sans text-ink-faint text-xs mt-5">
            通常1〜2営業日以内にご返信いたします。
          </p>
        </div>
      </div>
    </section>
  );
}
