import React from 'react'
import Navbar from './components/Navbar'
import {useLocation, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Allrooms from './Pages/Allrooms'
import RoomDetails from './Pages/RoomDetails'
import MyBookings from './Pages/MyBookings'
import HotelReg from './components/HotelReg'
import Layout from './Pages/HotelOwner/Layout'
import Dashboard from './Pages/HotelOwner/Dashboard'
import AddRoom from './Pages/HotelOwner/AddRoom'
import ListRoom from './Pages/HotelOwner/ListRoom'

const App = () => {
  const isOwnerPath = useLocation().pathname.includes("owner")
  return (
    <div>
      {!isOwnerPath && <Navbar/>}
      {false && <HotelReg/>}

      
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<Allrooms/>}/>
          <Route path='/rooms/:id' element={<RoomDetails/>}/>
          <Route path='/my-Bookings' element={<MyBookings/>}/>
         <Route path='/owner' element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='add-room' element={<AddRoom/>}/>
            <Route path='list-room' element={<ListRoom/>}/>



         </Route>



        </Routes>

      </div>
      <Footer/>
    </div>
  )
}
export default App