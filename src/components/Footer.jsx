import React from 'react'
import user from './user.png'
import office from './office.jpg'
import mail from './mail.jpg'
import phone from './phone.png'
import Facebook from './facebook-logo.png'
import Tweeter from './tweeter-logo.png'
import Instagram from './instagram.png'

function handelClick(arg){
  // console.log(arg)
  window.open(arg,'_blank')
}

function Footer() {
  return (
    <div>
      <div className="head bgblack"> <br /> contact Us</div>
      <div className="bgblack" style={{display:'flex',justifyContent:'center',fontSize:'25px',fontWeight:'bold'}}>Shree Balaji Construction Pvt. Lid.</div>
      <ul className='liNone foot bgblack'>
        <div className='font bgblack'>
        {/* <li className='space'></li> */}
        <li className='space bgblack'><img className='contactUsLogo' src={user} alt="" srcset="" /> Mr.Sourabh Patil(Director)</li>
        <li className='space bgblack'><img className='contactUsLogo' src={office} alt="" srcset="" /> A\p Kolhapur</li>
        </div>

        <div className='font bgblack'>
        <li className='space bgblack'><img className='contactUsLogo' src={phone} alt="" srcset="" /> 123456789</li>
        <li className='space bgblack'><img className='contactUsLogo' src={mail} alt="" srcset="" /> sourabhPatil@gmail.cpm</li>
        </div>
      </ul>
      <div className="bgblack cent">
      <img className='insta  bgblack' src={Instagram} onClick={()=>{handelClick('https://www.instagram.com/shree.balaji_construction/')}}/>
      <img className='insta bgblack' src={Facebook} onClick={()=>{handelClick('https://www.facebook.com/')}}/>
      <img className='insta bgblack' src={Tweeter} onClick={()=>{handelClick('https://www.facebook.com/')}}/>
      </div>
    </div>
  )
}

export default Footer