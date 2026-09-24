import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "../SectionHeading";
import { education } from "../../data/portfolio";
import { useReveal } from "../../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeading
          eyebrow="01 / ABOUT"
          title="Code with purpose. Create with curiosity."
          text="I enjoy building clean interfaces, reliable web applications and visual experiences that feel as good as they function."
        />

        <div className="about-layout">
          <article ref={ref} className="about-card reveal">
            <div className="about-card-glow" />
            <div className="about-icon"><Sparkles size={20} /></div>
            <span className="card-label">A LITTLE ABOUT ME</span>
            <h3>Developer by logic.<br /><em>Creative by instinct.</em></h3>
            <p>
              I&apos;m Mohammed Fayis Karivattath, a software developer focused on
              frontend and .NET development. I like turning ideas into polished,
              useful products while continuously improving my engineering and
              design skills.
            </p>
            <div className="about-meta">
              <span><MapPin size={15} /> Calicut, Kerala</span>
              <span><GraduationCap size={15} /> B.Com Computer Application</span>
            </div>
          </article>

          <div className="timeline-wrap">
            <div className="timeline-line" />
            {education.map((item, i) => (
              <article className="timeline-item reveal" key={item.title}>
                <div className="timeline-dot">{String(i + 1).padStart(2, "0")}</div>
                <div className="timeline-content">
                  <span className="timeline-period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <strong>{item.place}</strong>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}