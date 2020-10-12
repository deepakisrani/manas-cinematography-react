import React from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ImageCard from '../components/ImageCard';
import Metas from '../components/Metas'


const NotFound = () => {
    return (
        <>
            <Metas title="Page Not Found" />
            <ImageCard
                src="/not-found.jpg"
                alt="Not Found"
                title="Not Found"
                height="350"
            >   
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Page Not Found
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                    Seems like you have wandered onto an address that does not exist. Click <Link to="/" title="Home" >here</Link> to go back home.
                </Typography>
            </ImageCard>
        </>
    );
};

export default NotFound;