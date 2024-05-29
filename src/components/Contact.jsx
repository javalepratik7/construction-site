import React from 'react'
import Instagram from './instagram.png'
import logo from './logo.jpg'
import patil from './balajiConstruction.jpg'
import Facebook from './facebook-logo.png'
import Tweeter from './tweeter-logo.png'

function handelClick(arg){
  window.open(arg,'_blank')
}
function Contact() {
  return (
    <>
    <div><br />
    {/* <img src={patil} alt="" srcset="" style={{height:'250px'}}/> */}
    <div className='cent' >
      <br />
      <img className='patil' src={logo} /><br />
    </div>
    </div>
    <div className="cent ">
      <img className='insta' src={Instagram} onClick={()=>{handelClick('https://www.instagram.com/shree.balaji_construction/')}}/>
      <img className='insta' src={Facebook} onClick={()=>{handelClick('https://www.facebook.com/codewithharry')}}/>
      <img className='insta' src={Tweeter} onClick={()=>{handelClick('https://www.facebook.com/')}}/>
      <div className='font'>Contact No:1234567890</div>
    </div>
    </>
  )
}


export default Contact
