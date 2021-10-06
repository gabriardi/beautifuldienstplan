import React from "react"
import { Link } from "gatsby"

import Logo from "../../components/Logo"
import { header, link, layout } from "./Header.module.scss"

const Header = () => {
  return (
    <header className={header}>
      <Link to="/" className={`${link} ${layout}`}>
        <Logo />
        <h1>Beautiful Dienstplan</h1>
      </Link>
    </header>
  )
}

export default Header
