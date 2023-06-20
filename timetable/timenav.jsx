import React, {useState} from 'react'
// imported icons
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'
import {VscChevronRight} from 'react-icons/vsc'

//imported imgs
import logo from '../../assets/logo-starrail.png'

const timenav = () => {
    // remove navbar in small width screens
  
    const [active, setActive] = useState('navBarMenu')
    const showNavBar = () => {
      setActive('navBarMenu showNavBar')
    }
  
    const removeNavBar = () => {
      setActive('navBarMenu')
    }
  
    //background color for second navbar
    const [noBg, addBg] = useState('navBarTwo')
    const addBgColor = () => {
      if(window.scrollY >= 10){
        addBg('navBarTwo navbarWBG')
      }else{
        addBg('navBarTwo')
      }
    }
  
    
  
    return (
      <div className='timeNav flex'>
  
        <div className="navBarOne flex">
          <div className="logoDiv">
            <img src={logo} className='Logo'/>
          </div>
          <div class="top-nav" >
            <nav>
              <ul>
                <li class="color-one">Search</li>
                <li className="color-two flex"><VscChevronRight className="icon"/>Timetable</li>
                <li className="flex"><VscChevronRight className="icon"/>Pasengers</li>
                <li className="flex"><VscChevronRight className="icon"/>Confirmation</li>
                <li className="flex"><VscChevronRight className="icon"/>ManageBookings</li>
              </ul>
            </nav>
          </div>
          
          <div className='none flex'>
              <li className='flex'> <BsPhoneVibrate className='icon'/> Support</li>
              <li className='flex'> <AiOutlineGlobal className='icon'/> Languages</li>
          </div>
          
          <div className="atb flex">
            <button type='button'>Go Back</button>
          </div>
  
        </div>
  
        <div className={noBg}>
  
          
  
        </div>
      </div>
    )
  }
export default timenav 