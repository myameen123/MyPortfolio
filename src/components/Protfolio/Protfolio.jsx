import React from "react";
import "./Protfolio.css";
import IMG1 from "../../assets/project1.jpg";
import IMG2 from "../../assets/project22.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";

const DATA = [
  {
    id: 1,
    image: IMG1,
    title: "Fitness website built in React.js and TypeScript.",
    github: "https://github.com/myameen123/gym-website",
    demo: "https://gym-website-yameen.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title:
      "I have built this website for a radwi company. using Next.js and Express.js.",
    github: "https://github.com/myameen123",
    demo: "https://www.rad-wi.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Lorem ipsum dolor sit, amet consectetur adipisicing",
    github: "https://github.com",
    demo: "hhtps://livedemo.com",
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Lorem ipsum dolor sit, amet consectetur adipisicing",
  //   github: "https://github.com",
  //   demo: "hhtps://livedemo.com",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Lorem ipsum dolor sit, amet consectetur adipisicing",
  //   github: "https://github.com",
  //   demo: "hhtps://livedemo.com",
  // },
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
