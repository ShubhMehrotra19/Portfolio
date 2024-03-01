import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage'
import Linking from './Components/Linking/Linking';
import About from './Components/About/About';
import LampDemo from './Components/ui/LampDemo';

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
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/connect' element={<Linking />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<LampDemo />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
