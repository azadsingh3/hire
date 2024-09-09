import React from 'react';
import '../App.css';

const navBar = () => {
    

    return(
        <nav className= 'navBar'>
            <div className= 'navBar'>
                <ul>
                    <input type='text' id='mySearch' oneKeyUp='myFunction()' placeholder='title, location, pay'></input>
                    <button><a href='signup.js'>Post Job</a></button>
                    
                </ul>
            </div>
        </nav>
    )

}
export default navBar;

