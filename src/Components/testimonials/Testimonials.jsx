import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


import './testimonials.scss'
export default function Testimonials() {

    const data =[
        {
            name: 'Jakey 1',
            title: 'Legend',
            img: 'assets/Jakey_Kluger2.png',
            review: 'This kid is epic',
            icon:  <InstagramIcon className = 'icon'/>,
            featured: false,
        },
        {
            name: 'Jakey 2',
            title: 'Legend',
            img: 'assets/Jakey_Kluger2.png',
            review: 'This kid is a legend',
            icon:  <TwitterIcon className = 'icon'/>,
            featured: true,
        },
        {
            name: 'Jakey 3',
            title: 'Legend',
            img: 'assets/Jakey_Kluger2.png',
            review: 'This kid is the best',
            icon: <FacebookIcon className = 'icon'/>,
            featured: false,
        },
    ]
    return (
        <div className='testimonials' id = 'testimonials'>
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d)=>(
                <div className={d.featured ? "card featured" : "card"} >

                    <div className="top">
                    <img 
                    src={d.img} 
                    alt="" /> 
                    
                   {d.icon}
                    </div>
                    <div className="center">
                    {d.review}
                    </div>
                   
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                        
                    </div>
               
                </div>

                ))}
            </div>
        </div>
    )
}
