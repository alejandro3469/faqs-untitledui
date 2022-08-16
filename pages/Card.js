import React from 'react'
import Image from 'next/image'

import StudioIamge from "../public/cp2.jpg";

export default function Card() {
  return (
    <div className="card">
      <div className="card-data">
        <div className='card-title'>
          <h6 className='card-h6'>Our Studio</h6>
          <h3 className='card-h3'>People first. Design Later.</h3>
        </div>
        <div className='card-paragraphs'>
          <p>
            Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
            odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada.
          </p>
          <p className='invis-medium'>Elit nisi in eleifend sed nisi. Pulvinar at ocri, proin imperdiet commodo consectetur convallis risus. Sed condimentum enim dignissim adipiscing faucibus consequat, urna. Viverra purus et erat auctor aliquam. Risus volutpat vulputate posuere purus sit congue convallis aliquet</p>
          <p className='invis-medium'>
            Ipsum sit mattis nulla quam null. Gravida id gravida ac enim mauris
            id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean.
          </p>
        </div>
        <div className='card-buttons'>
          <button className='button1'>Get in touch</button>
          <button className='button2'>Our process</button>
        </div>
      </div>
      <div className="image-container-s">
        <Image src={StudioIamge} alt="studio image" className="studio-image" />
      </div>
    </div>
  );
}
