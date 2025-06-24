import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Banner () {
    return (
        <div className="banner">
            <h1 className='fs-6'>SUMMER 2025</h1>
        <h2 className='fs-1 fw-bold'>New Collection</h2>
        <p className='fs-6'>shorts, tees, tanks & more!</p>
        <Button 
        style={{ backgroundColor: "#35e15c", color: "black" }}  size="md" variant="outline-light" 
         className="px-4 py-2 fw-bold">
            SHOP NOW
        </Button> 
        </div>
    );
    }