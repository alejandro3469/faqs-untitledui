import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='upper-footer'>
            <div className='footer-logo'>
                <span className='logo footer-logo-text'> <span className='material-icons icon-span'>stars</span>Untitled UI</span>
                <p>Design amazing digital experiences that<br /> create more happy in the world</p>
            </div>
            <div className='footer-links'>
                <div className='link-group'>
                  <h4>Product</h4>
                  <ul className='footer-ul'>
                      <li>Overview</li>
                      <li>Features</li>
                      <li>Solutions <span className='new'>New</span></li>
                      <li>Tutorials</li>
                      <li>Pricing</li>
                      <li>Releases</li>
                  </ul>
                </div>
                <div className='link-group'>
                  <h4>Resources</h4>
                  <ul className='footer-ul'>
                      <li>Blog</li>
                      <li>Newzletter</li>
                      <li>Events</li>
                      <li>Help cetre</li>
                      <li>Tutorials</li>
                      <li>Support</li>
                  </ul>
                </div>
            </div>
            <div className='footer-input-section'>
                <h4>Stay up to date</h4>
                <div className='input-and-button'>
                    <input className='input' type={'text'} placeholder={'Enter your email'} />
                    <button className='button2'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='bottom-footer'>
            <div>© 2007 Untitled UI. All rights reserved.</div>
            <ul className='bottom-footer-links'>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
            </ul>
        </div>
    </footer>
  )
}
