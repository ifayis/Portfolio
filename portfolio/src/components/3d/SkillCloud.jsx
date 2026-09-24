import { useEffect, useMemo, useState } from "react";
import { skills } from "../../data/portfolio";


/* =========================================================
   SIMPLE ICONS
   ========================================================= */

const iconMap = {
  HTML: "html5",
  CSS: "css3",
  JavaScript: "javascript",
  React: "react",
  Redux: "redux",
  "C#": "csharp",
  ".NET Core": "dotnet",
  "SQL Server": "microsoftsqlserver",
  "Tailwind CSS": "tailwindcss",
  Bootstrap: "bootstrap",
  GitHub: "github",
  Vercel: "vercel",
  LeetCode: "leetcode",
  "VS Code": "visualstudiocode",
  "Visual Studio": "visualstudio",
  Canva: "canva",
  Figma: "figma",
};


/* =========================================================
   LOCAL ICONS
   ========================================================= */

const localIcons = {
  ".NET": "/assets/dotnet.svg",
  "EF Core": "/assets/ef.svg",
  "ADO.NET": "/assets/ADO.svg",

  CapCut: "/assets/capcut.svg",
  "VN Editor": "/assets/vn.svg",
  PicsArt: "/assets/picsart.svg",
};


/* =========================================================
   GET SKILL ICON
   ========================================================= */

const getIcon = (skill) => {

  /* Local icon first */
  if (localIcons[skill.name]) {
    return localIcons[skill.name];
  }

  /* Existing icon from portfolio data */
  if (skill.icon) {
    return skill.icon;
  }

  /* Simple Icons CDN fallback */
  const slug = iconMap[skill.name];

  if (slug) {
    return `https://cdn.simpleicons.org/${slug}`;
  }

  return "";
};


/* =========================================================
   SKILL CLOUD
   ========================================================= */

export default function SkillCloud() {

  const [activeIndex, setActiveIndex] = useState(0);


  /* =======================================================
     REORDER SKILLS
     React starts in the center
     ======================================================= */

  const skillItems = useMemo(() => {

    const reactIndex = skills.findIndex(
      (skill) => skill.name === "React"
    );

    if (reactIndex === -1) {
      return skills;
    }

    const reordered = [...skills];

    const [react] = reordered.splice(
      reactIndex,
      1
    );

    return [
      react,
      ...reordered,
    ];

  }, []);


  /* =======================================================
     AUTOMATIC CAROUSEL
     ======================================================= */

  useEffect(() => {

    const interval = setInterval(() => {

      setActiveIndex((current) => {

        const next =
          current + 1 >= skillItems.length
            ? 0
            : current + 1;

        return next;

      });

    }, 2800);


    return () => {
      clearInterval(interval);
    };

  }, [skillItems.length]);


  /* =======================================================
     CARD POSITION
     ======================================================= */

  const getCardStyle = (index) => {

    const total = skillItems.length;

    let difference =
      index - activeIndex;


    /* Wrap carousel */

    if (difference > total / 2) {
      difference -= total;
    }

    if (difference < -total / 2) {
      difference += total;
    }


    /* Horizontal distance */

    const x =
      difference * 142;


    /* Distance from center */

    const abs =
      Math.abs(difference);


    /* Depth */

    const z =
      abs === 0
        ? 80
        : -abs * 55;


    /* Scale */

    const scale =
      abs === 0
        ? 1.18
        : Math.max(
            0.72,
            1 - abs * 0.075
          );


    /* Small vertical movement */

    const y =
      abs === 0
        ? 0
        : abs % 2 === 0
          ? 10
          : -7;


    /* Rotation */

    const rotateY =
      difference * -7;


    /* Opacity */

    const opacity =
      abs > 5
        ? 0
        : Math.max(
            0.25,
            1 - abs * 0.13
          );


    return {

      transform: `
        translate3d(
          calc(-50% + ${x}px),
          ${y}px,
          ${z}px
        )
        rotateY(${rotateY}deg)
        scale(${scale})
      `,

      opacity,

      zIndex:
        100 - abs,

      pointerEvents:
        abs <= 4
          ? "auto"
          : "none",

    };

  };


  /* =======================================================
     MANUAL NAVIGATION
     ======================================================= */

  const moveCarousel = (direction) => {

    setActiveIndex((current) => {

      if (direction === "next") {

        return (
          (current + 1) %
          skillItems.length
        );

      }

      return (
        (current - 1 +
          skillItems.length) %
        skillItems.length
      );

    });

  };


  /* =======================================================
     RENDER
     ======================================================= */

  return (
    <div className="horizontal-skill-scene">

      {/* =================================================
          3D CAROUSEL
          ================================================= */}

      <div className="skill-carousel-stage">

        {/* CENTER AMBIENT GLOW */}

        <div className="center-skill-glow" />

        {/* CENTER FOCUS RING */}

        <div className="center-focus-ring" />


        {/* SKILL CARDS */}

        <div className="skill-carousel-track">

          {skillItems.map(
            (skill, index) => (

              <div
                key={
                  skill.id ??
                  skill.name
                }

                className={
                  index === activeIndex
                    ? "floating-skill-card active"
                    : "floating-skill-card"
                }

                style={getCardStyle(index)}

                onClick={() =>
                  setActiveIndex(index)
                }
              >

                {/* CARD SHADOW */}

                <div className="skill-card-shadow" />


                {/* CARD */}

                <div className="skill-card-face">

                  {/* GLASS */}

                  <div className="skill-card-glass" />


                  {/* TOP LIGHT */}

                  <div className="skill-card-top-light" />


                  {/* ICON */}

                  <div className="skill-logo-container">

                    <img
                      src={getIcon(skill)}
                      alt={skill.name}
                      draggable="false"
                    />

                  </div>


                  {/* NAME */}

                  <div className="skill-name">
                    {skill.name}
                  </div>


                  {/* 3D DEPTH */}

                  <div className="skill-card-depth" />

                </div>

              </div>

            )
          )}

        </div>

      </div>


      {/* =================================================
          CAROUSEL CONTROLS
          ================================================= */}

      <div className="skill-carousel-controls">

        <button
          type="button"
          onClick={() =>
            moveCarousel("previous")
          }
          aria-label="Previous skill"
        >
          ‹
        </button>


        <div className="skill-dots">

          {skillItems
            .slice(
              0,
              Math.min(
                8,
                skillItems.length
              )
            )
            .map((_, index) => (

              <span
                key={index}
                className={
                  index ===
                  activeIndex %
                    Math.min(
                      8,
                      skillItems.length
                    )
                    ? "active"
                    : ""
                }
              />

            ))}

        </div>


        <button
          type="button"
          onClick={() =>
            moveCarousel("next")
          }
          aria-label="Next skill"
        >
          ›
        </button>

      </div>

    </div>
  );
}