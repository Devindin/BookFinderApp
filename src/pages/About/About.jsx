import React from 'react';
import "./About.css";
import aboutImg from "../../images/About.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookStore</h2>
            <p className='fs-17'>At BookStore, our mission is simple: to inspire and enrich lives through the power of books. We believe that books have the ability to transport us to new worlds, broaden our horizons, and spark imagination. Our goal is to provide a welcoming space where readers can discover new stories, connect with fellow book lovers, and foster a lifelong love of reading.</p>
            <p className='fs-17'>Step inside BookStore and immerse yourself in a world of literary wonders. Our shelves are filled with a diverse selection of books spanning every genre imaginable. From bestsellers to hidden gems, classics to contemporary favorites, there's something for everyone at our bookstore</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
