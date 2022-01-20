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
            decription: 'This Website',
        },
        
        {
            id: 2,
            title: 'Bionic Hand with Machine Learning Rock Paper Scissors Algorithim',
            img: 'assets/bionichand.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'Bionic Hand',
        },
        
        {
            id: 3,
            title: 'Learning Cube for Children with Autism',
            img: 'assets/autism_cube2.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'Autism Cube',
        },
        
        {
            id: 4,
            title: 'Work-In: A Shopify Website',
            img: 'assets/shopifycover.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'Work In',
        },
        {
            id: 5,
            title: 'K-College Math Tutor',
            img: 'assets/Math-Tutoring.png',
            icon: <ViewInArIcon className = 'icon'/>,
            decription: 'Tutoring',
        },

    ];

    const handleClick = (way)=> {
        way === 'left' ? setCurrentSlide(currentSlide>0 ? currentSlide-1: 4) :
        setCurrentSlide(currentSlide<4 ? currentSlide+1: 0)
    };

    return (
        <div className = 'works' id = 'works_id'>

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
