const navLinks = [
  { label: "サービス", href: "#service" },
  { label: "プロフィール", href: "#profile" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <span className="font-display italic text-gold text-2xl">fumi</span>
            <p className="font-sans text-ink-faint text-xs mt-1 tracking-wider">
              coaching
            </p>
          </div>

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
          <p className="font-sans text-ink-faint text-xs">
            © {new Date().getFullYear()} fumi coaching
          </p>
        </div>
      </div>
    </footer>
  );
}
