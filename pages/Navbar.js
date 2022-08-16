import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <ul className='ul-navbar navbar-section large-navbar'>
          <li className='li-navbar'>
            <span className='material-icons icon-span'>stars</span>
            <Link href="/">
              <a className='logo'>Untitled UI</a>
            </Link>
          </li>
          <li className='li-navbar'>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className='li-navbar'>
            <Link href="#">
              <a>Products <span className='material-icons expand-icon'>expand_more</span></a>
            </Link>
          </li>
          <li className='li-navbar'>
            <a>Products <span className='material-icons expand-icon'>expand_more</span></a>
          </li>
          <li className='li-navbar'>
            <a>Pricing</a>
          </li>
        </ul>
        <ul className='ul-navbar navbar-section small-navbar'>
          <li className='li-navbar'>
            <span className='material-icons icon-span'>stars</span>
            <Link href="/">
              <a className='logo'>Untitled UI</a>
            </Link>
          </li>
        </ul>
        <ul className='ul-navbar navbar-section first-to-disappear'>
            <li className='li-navbar'>Chat to sales</li>
            <li className='li-navbar button'>Free trial</li>
        </ul>
        <button className='menu'><span className='material-icons'>menu</span></button>
    </nav>
    
  )
}
