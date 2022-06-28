import React from 'react'

import Welcome from '../Components/Home/welcome/Welcome';
import Galerie from './../Components/Home/galerie/Galerie';
import Features from './../Components/Home/Features/Features';
import Social from './../Components/Home/socialmedia/Social';
import Footer from './../Components/Home/footer/Footer';

function Home() {
  return (
    <div>
      <Welcome/>
      <Features/>
      <Galerie/>
      <Social/>
      <Footer/>
    </div>
  )
}

export default Home