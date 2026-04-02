const navLinks = [
  { label: "サービス", href: "#service" },
  { label: "プロフィール", href: "#profile" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-center">
          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-white/50 text-sm hover:text-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="font-serif text-white/40 text-sm leading-relaxed mb-6">
            答えは、あなたの中にある。<br />
            忙しさの中で、少しだけ立ち止まる時間を、大切に。
          </p>
          <p className="font-sans text-ink-faint text-xs">
            © {new Date().getFullYear()} fumi coaching
          </p>
        </div>
      </div>
    </footer>
  );
}
