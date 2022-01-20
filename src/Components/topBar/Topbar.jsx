import React from 'react'
import './topbar.scss'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className = {'topbar '+ (menuOpen && 'active')}>
           <div className="wrapper">
                <div className="left">
                <a href="#intro_id" className='logo'>jklugs.</a>
                <div className="itemContainer">
                <ContactPhoneIcon className ='icons'/>
                <span>+1 908 227 3560</span>
                </div>
                <div className="itemContainer">
                <AlternateEmailIcon className ='icons' />
                <span>evan.kluger@cooper.edu</span>
                </div>
                </div>
                    <div className="right">
                        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                            <span className='line1'> </span>
                            <span className='line2'> </span>
                            <span className='line3'> </span>
                        </div>
                    </div>   
            </div> 
        </div>
    )
}
