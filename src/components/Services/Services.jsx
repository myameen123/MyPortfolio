import React from "react";
import { BiCheck } from "react-icons/bi";
import "./Services.css";
export default function Services() {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="services">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
          </ul>
        </article>

        {/* End of UI/UX */}
        <article className="services">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
          </ul>
        </article>

        {/* End of Web development */}
        <article className="services">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
            <li>
              <BiCheck className="services__icon" />
              <p>Lorem, ipsum dolor sit amet consecteturelit.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
