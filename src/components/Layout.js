import React from "react"
import "../styles/index.scss"
import Header from "./Header"
import Footer from "./Footer"
import layoutClasses from "./Layout.module.scss"
const Layout = ({ children }) => {
  return (
    <div className={layoutClasses.container}>
      <div className={layoutClasses.content}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
