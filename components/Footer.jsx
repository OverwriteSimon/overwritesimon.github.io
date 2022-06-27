import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 Emy's Donuts. All Rights Reserved.</p>
      <p className='icons'>
        <AiFillInstagram/>
        <AiFillFacebook/>
        <AiOutlineTwitter/>
      </p>
    </div>
  )
}

export default Footer;
