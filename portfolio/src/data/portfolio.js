export const profile = {
  name: "MOHAMMED FAYIS KARIVATTATH",
  shortName: "Fayis KV",
  email: "fayisdev30@gmail.com",
  heroImage: "/assets/fayis-hero.png",
  socials: {
    linkedin: "https://www.linkedin.com/in/fayis-kv",
    github: "https://github.com/ifayis",
    instagram: "https://www.instagram.com/fayisdev",
    whatsapp: "https://wa.link/3ijjgn"
  }
};

export const professions = [
  "Software Developer",
  ".NET Developer",
  "Full Stack Developer",
  "Frontend Developer",
  "Videographer",
  "Video Editor",
  "Poster Designing"
];

export const education = [
  {
    period: "2018 — 2019",
    title: "SSLC",
    place: "PPTMYHSS Cherur",
    description: "High school education."
  },
  {
    period: "2019 — 2021",
    title: "Higher Secondary",
    place: "PPTMYHSS Cherur",
    description: "Commerce stream."
  },
  {
    period: "2021 — 2024",
    title: "B.Com Computer Application",
    place: "University of Calicut",
    description: "Graduation combining commerce and computer applications."
  },
  {
    period: "2025 — 2026",
    title: "Software Development Internship",
    place: "Bridgeon, Calicut",
    description: "Practical development experience across web technologies and application development."
  }
];

const devicon = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

export const skills = [
  ["HTML", "html5", "https://developer.mozilla.org/en-US/docs/Web/HTML"],
  ["CSS", "css3", "https://developer.mozilla.org/en-US/docs/Web/CSS"],
  ["JavaScript", "javascript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
  ["React", "react", "https://react.dev/"],
  ["Redux", "redux", "https://redux.js.org/"],
  ["C#", "csharp", "https://learn.microsoft.com/dotnet/csharp/"],
  [".NET", "dotnetcore", "https://dotnet.microsoft.com/"],
  [".NET Core", "dotnetcore", "https://dotnet.microsoft.com/"],
  ["SQL Server", "microsoftsqlserver", "https://www.microsoft.com/sql-server"],
  ["ADO.NET", "dotnetcore", "https://learn.microsoft.com/dotnet/framework/data/adonet/"],
  ["EF Core", "dotnetcore", "https://learn.microsoft.com/ef/core/"],
  ["Tailwind CSS", "tailwindcss", "https://tailwindcss.com/"],
  ["Bootstrap", "bootstrap", "https://getbootstrap.com/"],
  ["GitHub", "github", "https://github.com/"],
  ["Vercel", "vercel", "https://vercel.com/"],
  ["LeetCode", "leetcode", "https://leetcode.com/"],
  ["VS Code", "vscode", "https://code.visualstudio.com/"],
  ["Visual Studio", "visualstudio", "https://visualstudio.microsoft.com/"],
  ["CapCut", "capcut", "https://www.capcut.com/"],
  ["VN Editor", "vn", "https://www.vlognow.me/"],
  ["Canva", "canva", "https://www.canva.com/"],
  ["PicsArt", "picsart", "https://picsart.com/"],
  ["Figma", "figma", "https://www.figma.com/"]
].map(([name, icon, url], index) => ({
  id: `${name}-${index}`,
  name,
  url,
  icon: devicon(icon)
}));

export const projects = [
  {
    number: "01",
    title: "Luxe Living",
    type: "E-commerce Website",
    description:
      "A modern furniture shopping experience with a premium UI, product browsing, responsive layouts and a polished storefront flow.",
    stack: ["React", "JavaScript", "CSS","Bootstrap", "Vercel", "ADO.NET", "SQL Server"],
    image: "/assets/luxe-living.svg",
    live: "https://furniture-shop-theta-one.vercel.app/",
    github: "https://github.com/ifayis/LuxeLiving"
  },
  {
    number: "02",
    title: "Invento",
    type: "Multi-Tenant SaaS System",
    description:
      "A business management SaaS designed around tenant isolation, inventory, sales, purchases, customers, suppliers, reporting and secure APIs.",
    stack: ["ASP.NET Core", ".NET", "C#", "SQL Server", "EF Core", "Dapper", "JWT", "Redis"],
    image: "/assets/invento.svg",
    live: null,
    github: "https://github.com/ifayis/Invento.API"
  },
  {
    number: "03",
    title: "KC Vegetables",
    type: "Portfolio / Business Website",
    description:
      "A clean vegetable market website focused on presenting daily market prices with a modern visual identity and responsive experience.",
    stack: ["React", "Vite", "JavaScript", "Tailwind CSS", "Vercel"],
    image: "/assets/kc-vegetables.svg",
    live: "https://kc-vegetables.vercel.app/",
    github: "https://github.com/ifayis/KC-Vegetables"
  },
  {
    number: "04",
    title: "Zentro App",
    type: "Web Application",
    description:
      "A modern responsive web application focused on a smooth interface, reusable UI patterns and a polished frontend experience.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Vercel"],
    image: "/assets/zentro.svg",
    live: "https://zentro-smoky.vercel.app/",
    github: "https://github.com/ifayis/zentro"
  }
];