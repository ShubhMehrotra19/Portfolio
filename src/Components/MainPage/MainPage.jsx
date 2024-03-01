import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShuffleHero from '../Hero/ShuffleHero'
import { Section1 } from '../Section1/Section1'

function MainPage() {
    return (
        <>
        <Navbar />
      <div className='w-full mx-auto flex flex-col justify-center items-center gap-5'>
      <ShuffleHero />
      <Section1 />
      </div>
        </>
    )
}

export default MainPage
