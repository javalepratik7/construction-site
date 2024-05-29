import React from 'react'
import imag from './slider1.png'

function Home() {
  return (
    <div  >
      <img src={imag} alt=""  style={{margin:'0px',width:'100vw'}}/>
      <div className="cent" style={{marginTop:'25px'}}> <br />
      <div className="head" style={{backgroundColor:'rgb(215 198 198)',width:'80vw'}}> <br /> Our areas of expertise</div>
      </div>
      <div className="cent" >
      <div className='' style={{width:'80vw'}}>
        <div style={{ padding: '40px', fontSize: '23px', fontWeight: 'bold',backgroundColor:'rgb(215 198 198)' }}>

          We are one of the leading industrial contractors in India who is known to provide highly cost-efficient and customised prefabricated sheds and pre engineer building structures. We offer a wide array of services and products to fulfil the construction requirements of industries of different sectors. So whether you are the owner of a warehouse or wanted to start a new industry or seeking any other kind of industrial construction you can give us a chance to serve you with our quality products. Our offerings include-
        </div>

        <ul className='foot' style={{backgroundColor:'rgb(215 198 198)'}}>
          <div className="font">
            <li style={{backgroundColor:'rgb(215 198 198)'}}>Prefabricated Sheds</li>
            <li style={{backgroundColor:'rgb(215 198 198)'}}>Industrial Civil work</li>
            <li style={{backgroundColor:'rgb(215 198 198)'}}> Machine foundation</li>
            <li style={{backgroundColor:'rgb(215 198 198)'}}> Treemax flooring</li>
          </div>
          <div className="font">

            <li style={{backgroundColor:'rgb(215 198 198)'}}> Road construction work</li>
            <li style={{backgroundColor:'rgb(215 198 198)'}}> Turnkey projects solutions</li>
            <li style={{backgroundColor:'rgb(215 198 198)'}}> Factory Shed Fabrication Services</li>
            <li style={{backgroundColor:'rgb(215 198 198)'}}> Civil Works</li>
          </div>
          <div className="font">

            <li style={{backgroundColor:'rgb(215 198 198)'}}> Industrial interior work</li>
            <li style={{backgroundColor:'rgb(215 198 198)'}}> Warehouse Constructions</li>
            <li style={{backgroundColor:'rgb(215 198 198)'}}> PEB & Heavy Fabrication Works</li>
            <li style={{backgroundColor:'rgb(215 198 198)'}}> Epoxy painting work</li>
          </div>

        </ul>
        <div style={{ padding: '40px', fontSize: '23px', fontWeight: 'bold',backgroundColor:'rgb(215 198 198)' ,marginBottom:'30px'}}>
          Along with that, we have pioneer experience in preparing refrigerated and dry warehouses. Hence, if you need any of the above-mentioned services connect us immediately to get the best deals. Our offerings are highly reliable and affordable. You may connect us via call or email to know more about our services.
        </div>
      </div>
      </div>
      <hr ></hr>
    </div>
  )
}

export default Home
