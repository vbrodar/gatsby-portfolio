import React from "react"
import Navbar from "./Navbar"
import "../styles/main.css"

export default function Layout({ children }) {
  const currentYear = new Date().getFullYear()
  //Passing children property as argument so that everything from index.js that is nested inside className content renders inside it where we pass children props
  return (
    <div className="layout">
      <Navbar />
      <div className="layout--content">{children}</div>{" "}
      {/*This will render everything
      from index.js that is between Layout tags */}
      <footer>
        <p>
          Copyright <span className="header--home--span">©</span> {currentYear}
        </p>
      </footer>
    </div>
  )
}
