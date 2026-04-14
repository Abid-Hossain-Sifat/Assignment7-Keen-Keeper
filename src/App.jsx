import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router'
import Banner from './Components/Banner/Banner'
import Stats from './Components/Stats/Stats'
import Friends from './Components/Friends/Friends'
import Error404 from './Components/404 Error/Error'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Stats></Stats>
    <Friends></Friends>
    <Footer></Footer>
    <Error404></Error404>
    </>
  )
}

export default App
