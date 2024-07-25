import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>At BookHub, we believe that every book lover deserves a sanctuary where they can explore, discover, and immerse themselves in the world of literature. Whether you're a seasoned bibliophile or just beginning your reading journey, our online bookshop is here to cater to your every literary need.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header