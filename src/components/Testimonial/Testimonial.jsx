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
    name: "Jazib",
    review:
      "Working with Muhammad Yameen as a full stack developer has been an absolute pleasure. Their exceptional technical skills and ability to understand complex requirements have consistently impressed me. They have a keen eye for detail and a strong commitment to delivering high-quality work. Their problem-solving abilities and proactive approach make them a valuable asset to any development team. I highly recommend Muhammad Yameen for any full stack development projects",
  },
  {
    avatr: AVTR2,
    name: "Vishal Sager",
    review:
      "I had the privilege of collaborating with Muhammad Yameen on a challenging full stack development project, and I must say, their expertise is unparalleled. They seamlessly handled both front-end and back-end tasks with ease, demonstrating their comprehensive understanding of the entire development stack. Their code was clean, well-structured, and efficiently optimized. Muhammad Yameen is a highly reliable and diligent developer who consistently meets deadlines while maintaining exceptional quality. I wouldn't hesitate to work with them again",
  },
  {
    avatr: AVTR3,
    name: "Mehran Wahid",
    review:
      "I've had the pleasure of working closely with Muhammad Yameen on several full stack development projects, and I can confidently say that their contributions have been invaluable. Their strong grasp of various programming languages, frameworks, and technologies allowed them to tackle complex problems with efficiency and creativity. Muhammad Yameen is a great team player, always ready to collaborate and offer insightful suggestions. Their ability to communicate technical concepts clearly and concisely is commendable. I highly recommend Muhammad Yameen for any full stack development endeavor.",
  },
  {
    avatr: AVTR4,
    name: "Asfandiyar Jamali",
    review:
      "As a project manager, I've had the pleasure of overseeing Muhammad Yameen's work as a full stack developer, and I must say they are truly exceptional. Their technical prowess and attention to detail are unmatched. They have a natural ability to understand project requirements quickly and translate them into elegant and efficient code. Muhammad Yameen consistently delivers outstanding results, even when faced with tight deadlines. Their strong work ethic, professionalism, and passion for their craft make them an asset to any development team. I wholeheartedly endorse Muhammad Yameen as a top-tier full stack developer.",
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
