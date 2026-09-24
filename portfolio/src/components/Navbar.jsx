import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["Home", "home"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Connect", "connect"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="site-nav">
      <button className="brand" onClick={() => go("home")} aria-label="Go home">
        <span className="brand-dot" />
        <span>FAYIS<span className="accent">KV</span></span>
      </button>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        {links.map(([label, id]) => (
          <button key={id} onClick={() => go(id)}>{label}</button>
        ))}
      </nav>

      <button className="mobile-menu" onClick={() => setOpen((v) => !v)} aria-label="Toggle navigation">
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}