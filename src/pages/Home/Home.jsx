
import React from 'react';
import { Outlet } from 'react-router-dom';
import Slider from '../../components/Slider/slider';
import Categories from '../../components/Category/categories';
import Products from '../../components/Products/products';
import Newsletter from '../../components/Newsletter/newsletter';
import Footer from '../../components/Footer/footer';


const Home = () => {
  return (
    <div>
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
        <Outlet />
        
        
        
    </div>
  )
}

export default Home
