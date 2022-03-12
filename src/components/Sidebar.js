import { Avatar } from '@material-ui/core';
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    function recentItem(topic) {
        return (
            <div className='sidebar_recentItem'>
                <span className='span_hash'>#</span>
                <p>{topic}</p>
            </div>
        );
    }

    return (
        <div className='sidebar'>
            <div className='sidebar_top'>
                <img
                    src='https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
                    alt='sidebarimg'
                />
                <Avatar className='sidebar_avatar' />
                <h2>Syed Ansar</h2>
                <h4>Syedansar5555@gmail.com</h4>
            </div>
            <div className='sidebar_stats'>
                <div className='sidebar_stat'>
                    <p>Who viewd you</p>
                    <div className='sidebar_stat_number'>2,543</div>
                </div>
                <div className='sidebar_stat'>
                    <p>Views on posts</p>
                    <div className='sidebar_stat_number'>2,908</div>
                </div>
            </div>
            <div className='siderbar_button'>
                <p>Recent</p>
                {recentItem('Softwareengg')}
                {recentItem('Intern')}
                {recentItem('Sonnysangha')}
                {recentItem('linkedin')}
            </div>
        </div>
    );
};

export default Sidebar;
