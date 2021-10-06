import React from "react"
import { AiFillGithub, AiOutlineHeart } from "react-icons/ai"

import { footer, heart, github } from "./Footer.module.scss"

const Footer = () => {
  return (
    <footer className={footer}>
      <div>
        Made with{" "}
        <span className={heart}>
          <AiOutlineHeart />
        </span>{" "}
        by Gabriele
      </div>
      <div className={github}>
        <a
          href="https://github.com/gabriardi/beautifuldienstplan"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>
            <AiFillGithub />
          </span>
          frontend
        </a>
        <a
          href="https://github.com/gabriardi/dpformatter-api"
          rel="noopener noreferrer"
          target="_blank"
        >
          <span>
            <AiFillGithub />
          </span>
          backend
        </a>
      </div>
    </footer>
  )
}

export default Footer
