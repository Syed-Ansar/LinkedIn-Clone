import React from 'react';
import "./HeaderOptions.css"

const HeaderOptions = ({ Icon, title }) => {
    return (
        <div className="headerOptions">
            {Icon && <Icon className="headerOptions_icon" />}
            <h3 className="headerOptions_title">{title}</h3>
        </div>
    )
}

export default HeaderOptions