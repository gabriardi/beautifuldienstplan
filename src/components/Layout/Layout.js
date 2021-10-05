import React from "react"
import Footer from "../Footer"
import Header from "../Header"

import { container } from "./Layout.module.scss"

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
