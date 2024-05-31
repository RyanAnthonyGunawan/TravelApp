// cd project
import { useState } from 'react'
import './App.css'
import logo from "./assets/Logo.jpg"
import hp from "./assets/Handphone.jpg"
import dowgo from "./assets/DownloadGoogle.png"
import dowapp from "./assets/DownloadAppStore.jpg"
import background from "./assets/backgroundd.jpg"
import buje from "./assets/Buje.jpg"
import PAtas from "./assets/FotoPartnersAtas.jpg"
import PBawah from "./assets/OrangBawah1.png"
import hpbwh from "./assets/hpbawah.png"
import bwhtxt from "./assets/bawahtext.png"
import{ MdPeople } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter,  FaGlobe, FaCalendar, FaBlogger, FaGooglePlay, FaBlog, FaCheck, FaArrowRight, FaArrowDown, FaCalendarAlt, FaPlus} from 'react-icons/fa';

function App() {
 

  return (
    <>
        <div class="fContainer">
          <div>
          <nav class="wrapper">
            <img src={logo} alt="" width="50" height="50" />
            <div class="name"> Travelapp </div>
              <ul class= "navigation">
                <li><a class="Navbar"href="Review">Review</a></li>
                <li><a class="Navbar" href="People">People</a></li>
                <li><a class="Navbar" href="Partners">Partners</a></li>
                <li><a class="Navbar" href="Feedback">Feedback</a></li>
                <li><a class="Navbar" href="Pricing">Pricing</a></li>
                <li><a id="pbg" class="Navbar" href="Get the app">Get the app</a></li>
              </ul>
          </nav>
        </div>
        </div>  


{/* Review */}

        <div class="container">
         <div class="wraper">
         <div class="disco">
          <ul>
            <li><a class="Discover">Discover the <span class = "spanDiscover">Best <br />Lovely</span>  Places <br /></a></li>
            <li><a class="desk"> <br /> plan and book your perfect trip with expert advice, travel <br /> tips, destination information and inspiration from us</a></li>
            <ul class="imggoapp">
            <li><a href=""><img src={dowgo} class="dowgo" /></a></li>
            <li><a href=""><img src={dowapp} class="dowapp" /></a></li>
            </ul>
          </ul>
        </div>
        <div class="">
            <img src={hp} alt="" />
        </div>
         </div>
        </div>
        <div class="ArrowDown">
      <ul>
        <li><a href="" class="Down"><FaArrowDown id="ad"/></a></li>
        </ul>
        </div>

  {/* People */}
        <div class="Buildup">
            <a class="Build">BUILD UP A COMMUNITY </a> <br />
            <a class="JoinThe"> Join the biggest comunity of Travellers</a>
            <div class="containerBuje">
                <img class ="Buje"src={buje} />
           </div>
         </div>




{/* Partners */}
<div class="PContainer">
<div class="Cont">
        <div class="content">
            <div class="image">
              <ul>
                <li><img src={PAtas} class="PAtas" /></li>
                <li><img src={PBawah} class="PBawah" /></li>
              </ul>
            </div>
            <div class="text">
              <ul>
                <li class="Get">GET CONNECTED</li>
                <li class="Share">Share your memories <br /> with your travel buddys</li>
                <li class="Miringkan"><FaGlobe class="LogoItem"/> <span class="ItemDesk"> Search Travel Location </span><br /> <span class="DeskLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span> <br /> <span class="DeskLorem">sed do eiusmod tempor incididunt ut labore et dolore  </span></li>
                <li class="Miringkan"><FaCalendar class="LogoItem"/> <span class="ItemDesk">Create Team Event</span> <br /><span class="DeskLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </span><br /> <span class="DeskLorem">sed do eiusmod tempor incididunt ut labore et dolore </span></li>
                <li class="Miringkan"><MdPeople class="LogoItem"/> <span class="ItemDesk">Track Members </span> <br /> <span class="DeskLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span> <br /> <span class="DeskLorem">sed do eiusmod tempor incididunt ut labore et dolore </span></li>
              </ul>
            </div>
        </div>
    </div>
</div>

    {/* Feedback */}

    <div class="FBContainer">
      <div class="Cont">
        <div class="fbwraper">
            <div class="fbdiv1">
              <ul>
                <li class="popular">POPULAR DESTINITION</li>
                <li class="discovering">Discovering the ideal <br />Destiniton</li>
                <li class="Kebawah"> <span class="desktext">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span> <br /> <span class="desktext">sed do eiusmod tempor incididunt ut labore et dolore  </span></li>
                <li class="Kebawah"> <span class="desktext">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span> <br /> <span class="desktext">sed do eiusmod tempor incididunt ut labore et dolore  </span></li>
                <li><img src={bwhtxt} class="bwhtxt" /><a href=""><FaPlus class="plus"/></a></li>
              </ul>
            </div>
            <div class="fbdiv2">
                <img src={hpbwh} class="hpbwh" />
            </div>
        </div>
    </div>
</div>

{/* Pricing */}
        <div class="Pricing">
          <a  class="PricingTble"> PRICING TABLE</a> 
          <a class="Chose">Choose the plan that's right for you</a>
            <a href="" class="Underline">-</a>
          <div class="grid-container">
            <div class="card">
              <h2>$29 <span class="spanmonth">/month</span></h2>
              <p class="BasicBold">Basic</p>
              <ul>
                <li id="AtasDesk" class="DeskCard">Lorem ipsum dolor sit amet</li>
                <li id="BawahDesk" class="DeskCard">consectetur adipiscing elit</li>
              </ul>
              <ul class="Centang">
                <li> <FaCheck id="Check"/> <span class="KasihJeda"> Lorem ipsum dolor sit amet </span></li>
                <li> <FaCheck id="Check"/> <span class="KasihJeda"> Lorem ipsum dolor sit amet </span></li>
                <li> <FaCheck id="Check"/> <span class="KasihJeda"> Lorem ipsum dolor sit amet </span></li>
                <li class="choose"><a href="">Chose Plan <FaArrowRight className="right"/></a></li>

              </ul>
           </div>

           <div class="card">
             <h2>$49 <span class="spanmonth">/month</span></h2>
             <p class="BasicBold">Standard</p>
              <ul>
                <li id="AtasDesk" class="DeskCard">Lorem ipsum dolor sit amet</li>
                <li id="BawahDesk" class="DeskCard">consectetur adipiscing elit</li>
              </ul>
              <ul class="Centang">
                <li> <FaCheck id="Check"/> <span class="KasihJeda"> Lorem ipsum dolor sit amet </span></li>
                <li> <FaCheck id="Check"/> <span class="KasihJeda"> Lorem ipsum dolor sit amet </span></li>
                <li> <FaCheck id="Check"/> <span class="KasihJeda"> Lorem ipsum dolor sit amet </span></li>
                <li class="choose"><a href="">Chose Plan <FaArrowRight className="right"/></a></li>

              </ul>
           </div>
  
           <div class="card">
             <h2>$99 <span class="spanmonth">/month</span></h2>
             <p class="BasicBold">Premium</p>
              <ul>
                <li id="AtasDesk" class="DeskCard">Lorem ipsum dolor sit amet</li>
                <li id="BawahDesk" class="DeskCard">consectetur adipiscing elit</li>
              </ul>
              <ul class="Centang">
                <li> <FaCheck id="Check"/> <span class="KasihJeda"> Lorem ipsum dolor sit amet </span></li>
                <li> <FaCheck id="Check"/> <span class="KasihJeda"> Lorem ipsum dolor sit amet </span></li>
                <li> <FaCheck id="Check"/> <span class="KasihJeda"> Lorem ipsum dolor sit amet </span></li>
                <li class="choose"><a href="">Chose Plan <FaArrowRight className="right"/></a></li>

              </ul>
            </div>

          </div>
              
        </div>
          





{/* Get The App */}
    <div class="GContainer">
        <div class="Dwraper">
            <div> 
            <ul>
             <li> <a class="txtdownload">Download the travelapp now!</a></li>
             <li>  <a class="desktxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod tempor incididunt ut labore et dolore magna aliqua.</a> <br /></li>
            </ul>
              <ul class="pisah">
                <li> <a href=""><img src={dowgo} id="dowgo"class="download" /></a> </li>
                <ul><a href=""><img src={dowapp} id="dowapp" class="download" /></a></ul>
              </ul>
          </div>
         </div>
         </div>

{/* About */}

        <div class="about">
           <ul>
            <li><a class="ItemHeader">Company</a></li>
            <li><a href="" class="Item">Career</a></li>
            <li><a href="" class="Item">About Us</a></li>
            <li><a href="" class="Item">Blog</a></li>
            <li><a href="" class="Item">Press Info</a></li>
            <li><a href="" class="Item">Features</a></li>
            <li><a href="" class="Item">Success</a></li>
           </ul>
           <ul>
           <li><a class="ItemHeader">Travelapp</a></li>
            <li><a href="" class="Item">Wht Travelapp</a></li>
            <li><a href="" class="Item">Enterprise</a></li>
            <li><a href="" class="Item">Customer</a></li>
            <li><a href="" class="Item">Pricing</a></li>
            <li><a href="" class="Item">Security</a></li>
           </ul>
           <ul>
           <li><a  class="ItemHeader">Resource</a></li>
            <li><a href="" class="Item">Download</a></li>
            <li><a href="" class="Item">Help Center</a></li>
            <li><a href="" class="Item">Guide</a></li>
            <li><a href="" class="Item">Event</a></li>
            <li><a href="" class="Item">Developers</a></li>
            <li><a href="" class="Item">App Directory</a></li>
            <li><a href="" class="Item">Partners</a></li>
           </ul>
            <ul>
           <li><a  class="ItemHeader">Extras</a></li>
            <li><a href="" class="Item">Podcast</a></li>
            <li><a href="" class="Item">Travellerapp Shop</a></li>
            <li><a href="" class="Item">Travellerapp Work</a></li>
            <li><a href="" class="Item">Travellerapp Fund</a></li>
            <li><a href="" class="Item">Integrations</a></li>
            </ul>
            <ul>
           <li><a  class="ItemHeader">Extras</a></li>
            <li><input id="Email" placeholder='Email address' /><a href="" class="bcgijo"><FaArrowRight class="Arrow"/></a></li>

            </ul>
            </div>

   {/* Footer */}
      <div class="FContainer">
           <div >
          <footer class="fotwrapper">
            <img src={logo} alt="" width="50" height="50"/>
            <div class="NamaFooter">Travelapp</div>
            <ul class= "navigationF">
                <li><a class="footer"href="Review">Review</a></li>
                <li><a class="footer" href="People">People</a></li>
                <li><a class="footer" href="Partners">Partners</a></li>
                <li><a class="footer" href="Feedback">Feedback</a></li>
                <li><a class="footer" href="Pricing">Pricing</a></li>

                <a href="http://facebook.com"><FaFacebook class="iconnn" id="fb" /></a>
                <a href="https://www.blogger.com/"><FaBlogger class="iconnn" id="blg"/></a>
                <a href="http://youtube.com"><FaYoutube class="iconnn" id="yt"/></a>
                <a href="https://x.com"><FaTwitter class="iconnn" id="twt"/></a>
                <a href="https://instagram.com"><FaInstagram class="iconnn" id="ig"/></a>
            </ul>
            </footer>
        </div>
        </div>  
        
    </>


  )
}


export default App
