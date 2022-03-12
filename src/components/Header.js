import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import "./Header.css";
import HeaderOptions from './HeaderOptions';
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';


const Header = () => {
    return <div className='header'>

        <div className="header_left">
            <img src="https://img.icons8.com/fluency/48/000000/linkedin.png" />
            <div className="header_search">
                {/* Search icon */}
                <SearchIcon />
                <input type="text" placeholder='Search...' />
            </div>
        </div>
        <div className="header_right">
            <HeaderOptions title="Home" Icon={HomeIcon} />
            <HeaderOptions title="My Network" Icon={SupervisorAccountIcon} />
            <HeaderOptions title="Jobs" Icon={BusinessCenterIcon} />
            <HeaderOptions title="Messaging" Icon={ChatIcon} />
            <HeaderOptions title="Notification" Icon={NotificationsIcon} />
        </div>
    </div>;
};

export default Header;
