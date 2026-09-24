import { ArrowUpRight, Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  const goTop = () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="footer">
      <div className="container footer-main">
        <div>
          <button className="footer-brand" onClick={goTop}>
            FAYIS<span>KV</span>
          </button>
          <p>Software Developer · .NET · Full Stack · Frontend · Creative</p>
        </div>

        <div className="footer-socials">
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={19} /></a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={19} /></a>
          <a href={profile.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={19} /></a>
          <a href={profile.socials.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle size={19} /></a>
          <button onClick={goTop} aria-label="Back to top"><ArrowUpRight size={19} /></button>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Mohammed Fayis Karivattath</span>
      </div>
    </footer>
  );
}