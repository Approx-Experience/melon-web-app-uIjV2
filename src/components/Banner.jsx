import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Banner () {
    return (
        <div 
        style={{backgroundColor: "#ebf2ed"}} 
        className="banner d-flex align-items-center justify-content-around align-items-center p-5">
            
            <div className="d-flex flex-column align-items-start">

            <h1 className='fs-6'>SUMMER 2025</h1>
        <h2 className='fs-1 fw-bold'>NEW COLLECTION</h2>
        <p className='fs-6'>shorts, tees, tanks & more!</p>
        <Button 
        style={{ backgroundColor: "#35e15c", color: "black" }}  size="md" variant="outline-light" 
         className="px-4 py-2 fw-bold">
            SHOP NOW
        </Button> 
        </div>
        
        <img src='./banner-1.png' alt='banner' className='img-fluid w-25 mt-3' />
        </div>
    );
    }