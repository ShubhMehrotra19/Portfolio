import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import ShuffleHero from './Components/Hero/ShuffleHero';

function App() {
  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Thanks for visiting 🙇🏽‍♂️!!";
  });
  window.addEventListener("focus", () => {
    document.title = docTitle;
  });
  return (
    <>
      <Navbar />
      <div className=' w-full mx-auto flex flex-col justify-center items-center'>
      <ShuffleHero />
      </div>

    </>
  )
}

export default App
