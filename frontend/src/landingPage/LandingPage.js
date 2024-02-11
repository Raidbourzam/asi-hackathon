import React from "react";

import Feature from "./Feature";

import Footer from "./Footer";
import Contact from "./Contact";

import HeroSection from "./HeroSection.js";
import Apropos from "./Apropos.js";
import Navbar from "./Navbar.js";


function LandingPage() {
    return(
  <div>
   <Navbar/>
    <HeroSection/>
    <Apropos/>
    <Feature/>
    <Contact/>
    <Footer/>
  </div>
    )}  

export default LandingPage;