import React from 'react';
import { useState } from 'react';
import './works.scss';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: 1,
            title: 'Portfolio Website: React.js/Node.js Application',
            img: 'assets/React-Website.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'This Website is built from scratch using React.js and Node.js. Feel free to try out its features!',
        },
        
        {
            id: 2,
            title: 'Bionic Hand',
            img: 'assets/bionichand.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'The Bionic Hand is a mechanical design project that allows for a 3D printed hand to be controlled by the squeeze of the musscle. The purpose of this project was to create a cheap alterantive to the expensive Bionic Hands in the market, with the needed funcionatlity. Additionally, the hand was programmed with a Rock Paper Scissors game using a machine learning algorithm to be able to play Rock Paper Scissors against a user.',
        },
        
        {
            id: 3,
            title: 'Learning Cube for Children with Autism',
            img: 'assets/autism_cube2.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'The Learning Cube for Children with Autism is a project designed to make learning simpler and more interactive for Children with Autism. The project has a website for the teacher/parent to enter leearning questions, which the student answers with using the fun features of the Learning Cube.',
        },
        
        {
            id: 4,
            title: 'Work-In: A Shopify Website',
            img: 'assets/shopifycover.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'Work-In is an eccomerce website designed to sell workout equitment for ones home. The website was built and run using the Shopify platform.',
        },
        {
            id: 5,
            title: 'K-College Math and Science Tutor',
            img: 'assets/Math-Tutoring.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'For the past few years, I have been a math and science tutor for all ages. The tutoring not only helped me run a business and sharpen my skills in these subjects, but has helped me increase my skills with working with others and delivering over concepts and ideas correctly.',
        },

    ];

    const handleClick = (way)=> {
        way === 'left' ? setCurrentSlide(currentSlide>0 ? currentSlide-1: 4) :
        setCurrentSlide(currentSlide<4 ? currentSlide+1: 0)
    };

    return (
        <div className = 'works' id = 'works'>

            <div className="slider" style = {{transform: `translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    {d.icon}
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.decription}</p>
                                <span>Project</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src={d.img} alt="" />
                        </div>
                    </div>
                </div>
                ))}
            </div>

        <ArrowBackIosNewIcon className = 'arrow left' onClick = {()=>handleClick('left')}/>
        <ArrowForwardIosIcon className = 'arrow right' onClick = {()=>handleClick('right')}/>
        </div>
    )
}
