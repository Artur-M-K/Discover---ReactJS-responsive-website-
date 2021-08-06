import React from 'react';
import '../../App.css';
import Footer from '../Footer'

export default function About() {
    return (
        <>
        
        <div className="wrapper-body">
            <h1 className='about'>ABOUT US</h1>
            
            <div className="item-body">
                <div className="item-body-about">
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iure laborum saepe tempora, ab voluptatibus vel, magnam accusamus aliquam, repudiandae ea corporis neque amet culpa perferendis molestiae? Blanditiis, quod voluptas?
                    </p>
                </div>
                <div className="item-body-about">
                    <h3>Contact</h3>
                    <ul>
                        <li>RocketWay, 2801 Walnut Avenue</li>
                        <li>Los Angeles, USA</li>
                        <li>903-756-5564</li>
                        <li>name@mywebsite.com</li>
                    </ul>
                </div>

                
            </div>
            <Footer />
        </div>
        </>
    )
    
}