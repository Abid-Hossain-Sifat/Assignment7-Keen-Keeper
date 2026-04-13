import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router'
import Banner from './Components/Banner/Banner'
import Stats from './Components/Stats/Stats'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Stats></Stats>
    <Footer></Footer>
    </>
  )
}

export default App
