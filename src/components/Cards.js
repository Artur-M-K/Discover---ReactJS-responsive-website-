import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these Beautiful Places</h1>
            <div className="cards--container">
                <div className="cards--wrapper">
                    <ul className="cards--items">
                        <CardItem 
                            src="./images/img-9.jpg"
                            text="Dublin, capital of the Republic of Ireland, is on Ireland’s east coast at the mouth of the River Liffey."
                            label="DUBLIN CITY"
                            path="/services"
                        />
                        <CardItem 
                            src="./images/img-2.jpg"
                            text="Howth is a picturesque village clustered around and above a busy sailing and fishing port."
                            label="HOWTH"
                            path="/services"
                        />
                    </ul>
                    
                    <ul className='cards--items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Cliffs of Moher are one of the most outstanding coastal features of Ireland.'
                            label='CLIFFS OF MOHER'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Explore County Kerry holidays and discover the best time and places to visit.'
                            label='KERRY'
                            path='/services'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text="Donegal is Ireland's most spectacular County on the Wild Atlantic Way"
                            label='DONEGAL'
                            path='/services'
                        />

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
