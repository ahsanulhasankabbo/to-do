import React from 'react';
import './Footer.css';
import facebook from './images/facebook.png';
import github from './images/github.png';
import linkdin from './images/linkdin.png';

const Footer = () => {
    return (
        <div className=''>
            <div className='flex justify-center footer my-12'>
                <a href="https://www.facebook.com/ahsanulhasan.kabbo.9" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" /></a>
                <a href="https://github.com/ahsanulhasankabbo" target="_blank" rel="noopener noreferrer"><img src={github} alt="" /></a>
                <a href="https://www.linkedin.com/in/ahsanul-hasan-kabbo-64291522b/" target="_blank" rel="noopener noreferrer"><img src={linkdin} alt="" /></a>
            </div>
        </div>
    );
};

export default Footer;