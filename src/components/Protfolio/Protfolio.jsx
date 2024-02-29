import React from "react";
import "./Protfolio.css";
import IMG1 from "../../assets/project1.jpg";
import IMG2 from "../../assets/project22.jpg";
import IMG3 from "../../assets/ms-todo.png";
import IMG7 from "../../assets/photohub.png";
import IMG4 from "../../assets/portfolio44.jpg";
import IMG6 from "../../assets/netflix-clone.png";
import IMG5 from "../../assets/portfolio55_light.jpg";
// import IMG6 from "../../assets/portfolio6.jpg";

const DATA = [
  {
    id: 1,
    image: IMG5,
    title: "Notion Clone: using advance concepts of Next.js",
    github: "https://github.com/myameen123/notion-clone",
    demo: "https://myameennotes.vercel.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "PhotoHub: Cloud-based User Friendly Image Gallery",
    github: "https://github.com/myameen123/photo-hub.git",
    demo: "https://photohub-myameen.vercel.app/",
  },
  {
    id: 3,
    image: IMG6,
    title:
      "Netflix Clone: React, NextJS, TailwindCSS & Prisma, NextAuth, Google & Github Login",
    github: "git clone https://github.com/myameen123/netflix-clone.git",
    demo: "https://yameen-movies.vercel.app/",
  },

  {
    id: 2,
    image: IMG3,
    title: "MS TODO CLONE: Built in React.js, with Redux for State Management.",
    github: "https://github.com/myameen123/ms-todo-clone",
    demo: "https://ms-todo-clone-yameen.vercel.app/",
  },
  {
    id: 6,
    image: IMG2,
    title:
      "I have built this website for a radwi company. using Next.js and Express.js.",
    github: "https://github.com/myameen123",
    demo: "https://www.rad-wi.com/",
  },
  {
    id: 4,
    image: IMG4,
    title:
      "Mdx BLog: A blog app using MDX and Gatsby, with mdx plugin in a gatsby project.",
    github: "https://github.com/myameen123/MDX-Blog",
    demo: "https://mdx-blog-posts-gatsby.netlify.app/",
  },
  {
    id: 5,
    image: IMG1,
    title: "Fitness Website: Built in React.js and TypeScript.",
    github: "https://github.com/myameen123/gym-website",
    demo: "https://gym-website-yameen.netlify.app/",
  },

  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Lorem ipsum dolor sit, amet consectetur adipisicing",
  //   github: "https://github.com",
  //   demo: "hhtps://livedemo.com",
  // },
];
export default function Protfolio() {
  const profolioData = DATA.map((data) => (
    <article className="protfolio__item" key={data.id}>
      <div className="protfolio__item-image">
        <img src={data.image} alt="" />
      </div>
      <h3>{data.title}</h3>
      <div className="protfolio__item-cta">
        <a href={data.github} className="btn" target="_blank">
          Github
        </a>
        <a href={data.demo} className="btn btn-primary" target="_blank">
          Live Demo
        </a>
      </div>
    </article>
  ));
  return (
    <section id="protfolio">
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>
      <div className="container profolio__container">{profolioData}</div>
    </section>
  );
}
