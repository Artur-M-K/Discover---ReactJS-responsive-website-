import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Item from '../Item'

export default function Services() {
    return (
        <>
        
        <div className="wrapper-body">
        <h1 className='services'>SERVICES</h1>
            <div className="header">
                <h1>Services for You</h1>
            </div>
            <div className="item-body">
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
            <Footer />
        </div>
        
        
        </>
    )
}