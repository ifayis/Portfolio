import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, MousePointer2 } from "lucide-react";
import { profile, professions } from "../../data/portfolio";

export default function Hero() {
  const [profession, setProfession] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = professions[index];
    const speed = deleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (!deleting && profession === current) {
        setDeleting(true);
      } else if (deleting && profession === "") {
        setDeleting(false);
        setIndex((v) => (v + 1) % professions.length);
      } else {
        setProfession(
          deleting
            ? current.slice(0, Math.max(0, profession.length - 1))
            : current.slice(0, profession.length + 1)
        );
      }
    }, !deleting && profession === current ? 1450 : speed);

    return () => clearTimeout(timer);
  }, [profession, deleting, index]);

  const scrollToProjects = () =>
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      <div className="hero-image" />
      <div className="hero-vignette" />
      <div className="hero-grid" />

      <div className="hero-content">
        <div className="hero-kicker reveal">
          <span className="status-dot" />
          Available for opportunities
        </div>

        <p className="hero-hi reveal">Hi, I&apos;m</p>

        <h1 className="hero-name reveal">
          <span>MOHAMMED</span>
          <span className="neon-name">FAYIS KARIVATTATH</span>
        </h1>

        <div className="hero-profession reveal" aria-live="polite">
          <span className="profession-prefix">I&apos;m a </span>
          <span>{profession}</span><span className="typing-caret">|</span>
        </div>

        <p className="hero-copy reveal">
          I build modern web applications, create visual stories and turn ideas
          into real-world digital experiences.
        </p>

        <div className="hero-actions reveal">
          <button className="btn btn-primary magnetic" onClick={scrollToProjects}>
            View My Work <ArrowUpRight size={18} />
          </button>
          <button
            className="btn btn-ghost magnetic"
            onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let&apos;s Connect
          </button>
        </div>

        <div className="hero-scroll">
          <MousePointer2 size={15} />
          <span>Scroll to explore</span>
          <ArrowDown size={15} className="bounce" />
        </div>
      </div>

    </section>
  );
}