import React from "react"
import { Link } from "gatsby"

import { header, link } from "./Header.module.scss"

const Header = () => {
  return (
    <header className={header}>
      <Link to="/" className={link}>
        <h1>Dienstplan Beautifier</h1>
      </Link>
    </header>
  )
}

export default Header
