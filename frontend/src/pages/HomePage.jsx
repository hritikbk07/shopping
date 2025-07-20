import React from 'react'
import Hero from '../commponents/Hero'
import Product from '../commponents/Product'
import Category from '../commponents/Category'

const HomePage = () => {
  return (
    <div>
      <Category/>
      <Hero/>
      <Product/>
    </div>
  )
}

export default HomePage