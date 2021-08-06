import React from 'react';
import {Button} from '../Button';
import '../../App.css';

export default function SignUp() {
    return (
        <div className="container-login">
            <div className="wrapper-login">
                <h1 className='sign-up'>SIGN UP</h1>
            <form action="" className="form-login">
                <div className="form-item">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Name..." id="name"/>
                </div>
            
                <div className="form-item">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder="Password..." id="password"/>
                </div>
            
                <div className="form-item">
                    <label htmlFor="confirm">Confirm</label>
                    <input type="password" name="password" placeholder="Confirm Password..." id="confirm"/>
                </div>
            
            </form>
            <div className="submit">
            <Button buttonSize='btn--large' buttonStyle='btn--outline'>SUBMIT</Button>
        </div>
        </div>
        
        </div>
    )
    }
    
    
