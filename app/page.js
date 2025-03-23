import React from 'react'
import CategoryProducts from './Components/CategoryProducts/CategoryProducts'
import Slider from './Components/Slider/Slider'
import IconSlider from './Components/IconSlider/IconSlider'
import Discount from './Components/discount/Discount'
import NewProducts from './Components/NewProducts/NewProducts'

function Home() {
  return (
    <>
     <CategoryProducts />
     <Slider />
     <IconSlider />
     <Discount />
     <NewProducts />
    </>
  )
}

export default Home