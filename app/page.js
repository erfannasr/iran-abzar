import React from 'react'
import CategoryProducts from './Components/CategoryProducts/CategoryProducts'
import Slider from './Components/Slider/Slider'
import IconSlider from './Components/IconSlider/IconSlider'
import Discount from './Components/discount/Discount'
import NewProducts from './Components/NewProducts/NewProducts'
import NewDereil from './Components/NewDereil/NewDereil'
import BestSellingProduct from './Components/Best-selling product/BestSellingProduct'
import Chainsaw from './Components/Chainsaw/Chainsaw'

function Home() {
  return (
    <div className='max-w-[1200px]'>
     <CategoryProducts />
     <Slider />
     <IconSlider />
     <Discount />
     <NewProducts />
     <NewDereil />
     <BestSellingProduct />
     <Chainsaw />
    </div>
  )
}

export default Home