import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
export default function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/muhammad-yameen-488b33231"
        target="_blank"
      >
        <BsLinkedin />{" "}
      </a>
      <a href="https://github.com/myameen123" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/muhammad.yameen.1293" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
}
