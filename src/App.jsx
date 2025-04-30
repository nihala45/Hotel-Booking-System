import React from 'react'
import Navbar from './components/Navbar'
import {useLocation, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './components/Footer'

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>

      </div>
      <Footer/>
    </div>
  )
}
export default App