import React from 'react';
import { useEffect, useState } from 'react';
import './portfolio.scss';
import PortfolioList from "../portfoliolist/PortfolioList";

import {
    featuredPortfolio,
    WebPortfolio,
    TutoringPortfolio,
    DesignPortfolio,
} from '../../data';


export default function Portfolio({listOpen, setListOpen}) {
    
const [selected, setSelected] = useState('featured');
const [data, setData] = useState([]);

const list = [
    {
        id: 'featured',
        title: 'Featured',
    },
    {
        id: 'web apps',
        title: 'Web Apps',
    },
    {
        id: 'mechanical design projects',
        title: 'Mechanical Design Projects',
        
    },
    {
        id: 'tutoring',
        title: 'Tutoring',
    },
];

useEffect(()=>{

    switch(selected){
        case 'featured':
            setData(featuredPortfolio);
            break;
        case 'web apps':
            setData(WebPortfolio);
            break;
        case 'mechanical design projects':
            setData(DesignPortfolio);
            break;
        case 'tutoring':
            setData(TutoringPortfolio);
            break;
        default:
            setData(featuredPortfolio);
    }

},[selected]);
    return (
        <div className = 'portfolio' id = 'portfolio'>
            <h1>Portfolio</h1>
            <ul>
            <li className='active'>Web Applications</li>
            <li className='active'>Mechanical Designs</li>
            <li className='active'>Tutoring</li>
            </ul>

            <div className="container">
            {data.map(d=>(
                <div className="item">
                    <img 
                    src={d.img}
                    alt="" />
                    <h3>{d.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}
