import React from 'react'
import {assets} from '../../assets/assets'
import {UserButton} from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-300 bg-white transition-all duration-300 h-16 shadow-sm'>
      <Link to="/" className="flex items-center gap-2">
        <img src={assets.logo} alt='logo' className='h-9 invert opacity-80' />
      </Link>

      <UserButton />
    </div>
  )
}

export default Navbar
