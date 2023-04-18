import React, { useState } from 'react';
import TShirtDesigner from '../tshirt-design/tshirt-design';
import './home.css';

const Home = () => {
    const [color, setColor] = useState('https://m.media-amazon.com/images/I/61ULbC6EFHL._UY879_.jpg');

    const handleDropdownChange = (event) => {
        setColor(event.target.value);
    }

    return (
        <>
            <div className='header'>T-Shirt Designs</div>
            <div className='main-content'>
                <img src={color} alt='tshirt' />
                <TShirtDesigner />
                <div className='color'>
                    <h2>T-Shirt Color</h2>
                <select onChange={handleDropdownChange}>
                    <option value="https://m.media-amazon.com/images/I/61ULbC6EFHL._UY879_.jpg">Maroon</option>
                    <option value="https://m.media-amazon.com/images/I/5176MRuLASS._SY741._SX._UX._SY._UY_.jpg">Black</option>
                    <option value="https://m.media-amazon.com/images/I/61SdfC6V8fL._SY741._SX._UX._SY._UY_.jpg">Yellow</option>
                    <option value="https://m.media-amazon.com/images/I/61tINIR34xL._SY741._SX._UX._SY._UY_.jpg">Blue</option>
                    <option value="https://m.media-amazon.com/images/I/61sqcY9xZPL._SY741._SX._UX._SY._UY_.jpg">Green</option>
                </select>
                </div>
            </div>
        </>
    )
};

export default Home;