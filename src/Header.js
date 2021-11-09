import React from 'react'
import Logo from './robinhood.svg'

function Header() {
    return (
        <div className="header__wrapper">
            {/* logo */}
            <div className="header__logo">
                <img src={Logo} width={25} />
            </div>
            {/* search */}
            <div className="header__search">
                <div className="header__searchContainer">
                    
                </div>
            </div>
            {/* menuitems */}
            
        </div>
    )
}

export default Header

