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
                <form onSubmit ={handleSubmit}>
                    <input type="text" placeholder='Email' />
                    <textarea placeholder='Message'></textarea>
                    <button>Submit</button>
                    {message && <span>Thanks will reply soon</span>}
                </form>
            </div>
        </div>
    )
}
