import React from 'react'
import './Header.css'
const Header = function(props) {
    return (
        <header>
            <a href="https://www.paybyphone.com" className="image-wrapper">
                <img
                    src="https://www.burnaby.ca/Assets/city+services/roads+and+traffic/Parking/Pay+By+Phone+logo.png"
                    alt="logo"
                />
            </a>
            <h1>
                Meal Recipes
            </h1>
        </header>
    )
}

export default Header
