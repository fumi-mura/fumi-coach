const navLinks = [
  { label: "Top", href: "#hero" },
  { label: "Service", href: "#service" },
  { label: "Profile", href: "#profile" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink py-16">
      <div className="max-w-6xl mx-auto px-6">
        <p className="font-serif text-white/40 text-sm leading-relaxed text-center mb-12">
          答えは、あなたの中にある。<br />
          忙しさの中で、少しだけ立ち止まる時間を、大切に。
        </p>

        <div className="border-t border-white/10 pt-8 text-center">
          <nav className="flex flex-wrap justify-center gap-8 mb-6">
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
          <p className="font-sans text-ink-faint text-xs">
            © {new Date().getFullYear()} fumi coaching
          </p>
        </div>
      </div>
    </footer>
  );
}
