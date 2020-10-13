import React from 'react';
import Navbar from '../components/Navbar';
import adminPage from '../components/ListUserComponent';
// import Container from '@material-ui/core/Container';

function pageUser() {
    return (
        <div>
            <Navbar/>
            <adminPage/>
        </div>
    );
}

export default pageUser;