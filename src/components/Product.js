import React from 'react'

export const Product = ({title, subtitle, children, image}) => {
    return (
        
            <div className="item-body-products">
                <div className="products-info">
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>{children}</p>
                </div>
                <div className="products-img">
                    <img src={image} alt="" />
                </div>
            </div>
        
    )
}

export const ProductRev = ({title, subtitle, children, image}) => {
    return (
        
            <div className="item-body-products">
                <div className="products-img">
                    <img src={image} alt="" />
                </div>
                <div className="products-info">
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>{children}</p>
                </div>
            </div>
        
    )
}

