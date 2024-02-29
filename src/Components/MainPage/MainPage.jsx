import React from 'react'
import Navbar from '../Navbar/Navbar'
import ShuffleHero from '../Hero/ShuffleHero'

function MainPage() {
    return (
        <>
        <Navbar />
      <div className=' w-full mx-auto flex flex-col justify-center items-center'>
      <ShuffleHero />
      </div>
        </>
    )
}

export default MainPage
