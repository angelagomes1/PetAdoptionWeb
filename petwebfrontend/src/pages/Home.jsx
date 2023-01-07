import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Pet from '../components/Pet'
import Pets from '../components/Pets'
import Products from '../components/Products'
import Slider from '../components/Slider'


const Home = () => {
  return (
    <div>
      <Announcement/>
      <NavBar/>
      <Slider/>
      <Categories/>
      <Pet/>
      <Newsletter/>
      <Footer/>
      </div>
  )
}

export default Home