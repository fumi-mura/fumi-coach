export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-cream overflow-hidden"
    >
      {/* Watermark decoration */}
      <span
        className="absolute right-8 top-1/2 -translate-y-1/2 font-serif text-[400px] leading-none text-ink/[0.03] select-none pointer-events-none"
        aria-hidden="true"
      >
        道
      </span>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 pt-40">
        <div className="max-w-2xl">
          {/* Gold decorative line */}
          <div className="w-16 h-px bg-gold mb-6" />

          {/* Eyebrow */}
          <p className="font-display italic text-gold tracking-[0.25em] text-sm mb-8">
            COACHING
          </p>

          {/* Main headline */}
          <h1 className="font-serif text-ink leading-[1.7] mb-6 text-4xl md:text-5xl lg:text-6xl">
            「なりたい自分」に、<br />正直でいい。
          </h1>

          {/* Sub copy */}
          <p className="font-sans text-ink-muted text-base md:text-lg leading-relaxed mb-10 max-w-md">
            コーチングで、自分の声を聴く時間をつくろう。
          </p>

          {/* CTA */}
          <a
            href="#contact"
            className="inline-block bg-gold text-white font-sans font-medium text-sm tracking-wider px-8 py-4 hover:bg-gold-dark transition-colors duration-300"
          >
            無料体験セッションを申し込む
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-sans text-ink-faint text-xs tracking-widest">SCROLL</span>
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          className="text-gold"
        >
          <path
            d="M1 1L8 8L15 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
}
