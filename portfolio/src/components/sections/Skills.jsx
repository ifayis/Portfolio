import SectionHeading from "../SectionHeading";
import SkillCloud from "../3d/SkillCloud";
import { skills } from "../../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">

        {/* SECTION HEADING */}
        <SectionHeading
          eyebrow="02 / SKILLS"
          title="Tools That Power My Ideas"
          text="A collection of technologies I work with to build modern, scalable and beautiful web applications."
        />

        {/* CENTERED SKILL EXPERIENCE */}
        <div className="skills-content">

          {/* 3D SKILL CAROUSEL */}
          <div className="skills-visual reveal">
            <SkillCloud />
          </div>

          {/* STATISTICS */}
          <div className="skills-statistics">

            <div className="skill-stat-item">
              <strong>{skills.length}+</strong>
              <span>Technologies</span>
            </div>

            <div className="skill-stat-divider" />

            <div className="skill-stat-item">
              <strong>100%</strong>
              <span>Self Taught</span>
            </div>

            <div className="skill-stat-divider" />

            <div className="skill-stat-item">
              <strong>∞</strong>
              <span>Keep Learning</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}