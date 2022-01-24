import React from 'react';
import './intro.scss';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
    

    const textRef = useRef();
    
    useEffect(() => {
        init(textRef.current, 
            { 
            showCursor: true, 
            backDelay:  1500,
            typeSpeed:  100,
            backSpeed: 125,
            strings: [' Mechanical Engineer', ' Programmer', ' Tutor', ' Web Developer' ], 
        });
    }, [])
    
    return (
        <div className = 'intro' id='intro'>
            <div className='left'>
                <div className="imageContainer">
                    <img src="assets/Jakey_Kluger4.png" alt="" />
                </div>
            </div>

            <div className='right'>
                <div className="wrapper">
                    <h2>Hi there I am</h2>
                    <h1>Jakey Kluger</h1>
                    <h3>Student
                    <span ref={textRef}></span>
                    </h3>
                </div>
                <a href='portfolio'>
                    <ArrowDownwardIcon className ='icons' />
                </a>
            </div>
        </div>
    )
}
