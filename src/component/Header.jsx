import React from 'react'
import {Link} from "react-router-dom"
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <>
       <nav>
        <h1>Techstar</h1>
        <main>
         <HashLink smooth to = {"/#home"}>Home</HashLink>
         <Link to={"/contact"}>contact</Link>
         <HashLink smooth to={"/#about"}>About</HashLink>
         <HashLink smooth to={"/#brand"}>Brand</HashLink>
         <Link to = {'/services'}>services</Link>
          </main>
         
       </nav>

    </>
  )
}

export default Header