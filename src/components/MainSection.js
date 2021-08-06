import React from 'react'
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
    return (
        <div className="main-container">
            <video src="../videos/video-1.mp4" autoPlay loop muted type="video/mp4" playsInline></video>
            <h1>DISCOVER AMAZING IRELAND</h1>
            <p>What are you waiting for?</p>
            <div className="main-btns">
                <Button 
                    className="btns" 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--large'>
                        GET STARTED
                </Button>
                <Button 
                    className="btns" 
                    buttonSize='btn--large'>
                        MORE INFO...
                </Button>
            </div>
        </div>
    )
}

export default MainSection;
