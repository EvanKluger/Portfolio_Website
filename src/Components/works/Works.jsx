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
            decription: 'The Bionic Hand is a mechanical 3D printed hand that is controlled by the squeeze of a muscle. The purpose of this project was to create a cheap alternative to the expensive Bionic Hands in the market, that still has the capability of grabbing objects. Additionally, the hand was also integrated for a project involving a game booth where the hand was programmed with a Rock Paper Scissors algorithm to play against a user.',
        },
        
        {
            id: 3,
            title: 'Learning Cube for Children with Autism',
            img: 'assets/autism_cube2.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'The Learning Cube for Children with Autism is a project designed to make learning simpler and more interactive for Children with Autism. The project involves a website for the teacher/parent to enter learning questions and a fidget cube for the student to enter answers in a focused and entertaining way.',
        },

        {
            id: 4,
            title: 'Falling Bananas - A JavaScript Game',
            img: 'assets/MoneyGame.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'Falling Bananas is a fun game that can be played at fallingbananas.com',
        },

        {
            id: 5,
            title: 'Dentist Business Website',
            img: 'assets/dentist_website.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'The Dentist Business Website is a website I built from scratch for a small dentist practice',
        },
        {
            id: 6,
            title: 'Springles: Energy Can',
            img: 'assets/Energy_Can.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'The Springles Energy Can is a can that produces energy when shaken to be taken during hikes or trips as a portable charger. The model illustarted highlights the inside of the can and the parts that conduct the electricty need to power. The can successfully convwerted shaking power into a usable USB outlet that a person can charge there phone with.',
        },

        {
            id: 7,
            title: 'Cart Competetion',
            img: 'assets/Cart_Competition.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'The Cart Competetion was a competition for part of the Design and Prototyping course. The deisng illustrated on the right won the compeition for its stability and cool features',
        },
        
        {
            id: 8,
            title: 'Work-In: A Shopify Website',
            img: 'assets/shopifycover.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'Work-In is an ecommerce website designed to sell workout equipment for one’s home. The website was built and ran on the Shopify platform.',
        },
        {
            id: 9,
            title: 'K-College Math and Science Tutor',
            img: 'assets/Math-Tutoring.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'For the past few years, I have been a math and science tutor for all ages. The tutoring not only helped me run a business and sharpen my skills in these subjects but has helped me increase my skills in working with others and delivering over concepts and ideas correctly.',
        },

    ];

    const handleClick = (way)=> {
        way === 'left' ? setCurrentSlide(currentSlide>0 ? currentSlide-1: 4) :
        setCurrentSlide(currentSlide<8 ? currentSlide+1: 0)
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
