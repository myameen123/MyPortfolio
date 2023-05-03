import React from "react";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";
import "./Testimonial.css";

const DATA = [
  {
    avatr: AVTR1,
    name: "Tina Snow",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptate impedit consectetur omnis sunt aperiam at facilis tenetur est. Libero velit rem quis. Facere, mollitia!",
  },
  {
    avatr: AVTR2,
    name: "Mina",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptate impedit consectetur omnis sunt aperiam at facilis tenetur est. Libero velit rem quis. Facere, mollitia!",
  },
  {
    avatr: AVTR3,
    name: "Naina",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptate impedit consectetur omnis sunt aperiam at facilis tenetur est. Libero velit rem quis. Facere, mollitia!",
  },
  {
    avatr: AVTR4,
    name: "Shona",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum voluptate impedit consectetur omnis sunt aperiam at facilis tenetur est. Libero velit rem quis. Facere, mollitia!",
  },
];
export default function Testimonial() {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Tesimonials</h2>
      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {DATA.map((data) => (
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={data.avatr} alt="" />
            </div>
            <h5 className="client__name">{data.name}</h5>
            <small className="client__review">{data.review}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
