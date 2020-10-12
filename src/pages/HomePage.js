import React from 'react';
import { Typography } from '@material-ui/core';

import { homePage } from '../Data';

import ImageCard from '../components/ImageCard';
import Metas from '../components/Metas';

const shortDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus varius ullamcorper fringilla. Cras ante justo, egestas sit amet velit vitae.`

const HomePage = () => {
    return (
        <>
            <Metas
                title="Manas Tiwari | Cinematographer"
                description={shortDescription}
            />
            <ImageCard
                src="/banner.jpg"
                height="400"
                alt="Banner"
                title="Banner"
            >
                <Typography variant="h4" component="h1" align="left" gutterBottom>
                    Manas Tiwari, Cinematographer
                </Typography>
                {homePage.map((paragraph) => {
                    return (
                        <Typography variant="body1" component="p" align="left" gutterBottom>
                            {paragraph}
                        </Typography>
                    );
                })}
            </ImageCard>
        </>
    )
};

export default HomePage;