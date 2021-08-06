import React from 'react';
import '../../App.css';
import Footer from '../Footer'
import {Product, ProductRev} from '../Product';

export default function Products() {
    return (
        <>
        
        <div className="wrapper-body">
            <h1 className='products'>PRODUCTS</h1>
            <Product 
                title='Lorem Ipsum'
                subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing.'
                image='/images/img-1.jpg'
            >
                Et ullum iisque conclusionemque eam, mel ad erat vitae accumsan noluisse, nostrum accumsan movet salutandi. Fugit expetenda interesset no his, nec eloquentiam proin eu. Sea id malorum dolores sapientem, saepe.
            </Product>
            <ProductRev
            title='Lorem Ipsum'
            subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing.'
            image='images/img-10.jpg'>
                Et ullum iisque conclusionemque eam, mel ad erat vitae accumsan noluisse, nostrum accumsan movet salutandi. Fugit expetenda interesset no his, nec eloquentiam proin eu. Sea id malorum dolores sapientem, saepe.
            </ProductRev>
            <Footer />
        </div>
        </>
    )
    
}