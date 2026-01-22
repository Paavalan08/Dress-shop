import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>an e-commerce website is an online platform that facilitate
            buying and selling of products or services over the internet
            showcase their products or services over the internet serves 
            as a virtual market place where business and individuals showcases
            their products, interact with customers, and conduct transaction
            without the need for a physical presence. E-commerce website have
            gained immense poplarty due to their convince accessibility, and the
            global reacg they offer</p>
            <p>
            E-commerce website typically display products or services as
            detailed descriptions images , prices , and any available variety
            (e.g., sizes, colors). Each product usually has its own details
            with own relevent infromation
            </p>
      </div>
    </div>
  )
}

export default DescriptionBox
