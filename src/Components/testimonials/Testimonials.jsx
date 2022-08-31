import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


import './testimonials.scss'
export default function Testimonials() {

    const data =[
        {
            name: 'Israel Gulko',
            title: 'Yeshiva University',
            img: 'assets/gulko.png',
            review: 'I have known Jakey since our days in high school. He has always brought creative solutions to whatever problems came up and was an amazing teammate. I have seen firsthand some of his recent projects and excited to see how they unfold.',
            icon:  <InstagramIcon className = 'icon'/>,
            featured: false,
        },
        {
            name: 'Sammy Simcha',
            title: 'Yeshiva University',
            img: 'assets/sammyprofile2.png',
            review: 'Jakey has been my tutor for over two years now. He has helped me through numerous classes such as my recent Statistics class. He not only knows the information but has the ability to communicate it over in a simple and understandable way.  ',
            icon:  <InstagramIcon className = 'icon'/>,
            featured: true,
        },
        {
            name: 'Kayla Tarlow',
            title: 'Coworker',
            img: 'assets/kayla.png',
            review: 'I have worked with Jakey on numerous jobs and projects together. He always put his all and not only was a pleasure to work with, but was also a great leader.',
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
