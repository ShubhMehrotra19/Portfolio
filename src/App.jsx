import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './Components/MainPage/MainPage'
import Linking from './Components/Linking/Linking';

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
      <Route path='/connect-with-me' element={<Linking />} />
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
