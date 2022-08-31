import React from 'react';
import './contact.scss';
import {useState} from 'react';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

export default function Contact() {
    
    const [message, setMessage] = useState(false);
    const handleSubmit = (e)=>{
        e.preventFault();
        setMessage(true);
    }
    
    return (
        <div className = 'contact' id='contact'>
            
            <div className="container">
                <h2>Contact</h2>
                <ConnectWithoutContactIcon className = 'icon'/>
                <form action = 'https://formsubmit.co/jakeykluger@gmail.com' method="POST" onSubmit ={handleSubmit} >
                    <input classname = 'first' type='text' name = 'first name' placeholder = 'First Name' required/>
                    <input classname = 'last' type='text' name = 'last name' placeholder = 'Last Name' required/>
                    <input classname = 'email' type='email' name = 'email' placeholder = 'Email Address'/>
                    <input classname = 'phone' type='phone' name = 'phone' placeholder = 'Phone Number'/>    
                    <textarea placeholder='Message' required></textarea>
                    <button>Submit</button>
                    {message && <span>Thanks will reply soon</span>}
                </form>
            </div>
        </div>
    )
}
