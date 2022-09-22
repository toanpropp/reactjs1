import React from 'react'
import Banner from './Component/Banner'
import Footer from './Component/Footer'
import Navigation from './Component/Navigation'
import Product from './Component/Product'

export default function App() {
  return (
    <div>
        <Navigation />
        <Banner />
        <Product />
        <Footer />
    </div>
  )
}
