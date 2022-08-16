import React from 'react'

import Image from 'next/image'
import Avatar from "../public/avatar.jpg";

export default function Testimonial() {
  return (
    <div className='testimonial'>
        <h4 className='testimonial-h4'>Untitled has saved us thousands of hours of work.<br/> We{"'"}re able to spin up projects and features faster.</h4>
        <div className='testimonial-avatar'>
            <div className="avatar-container">
              <Image src={Avatar} alt="avatar picture" className="avatar" />
            </div>
            
            <div>
              <p className='testimonial-name'>Alma Deutscher</p>
              <p className='testimonial-title'>UX Designer, Circooles</p>
            </div>
        </div>
    </div>
  )
}
