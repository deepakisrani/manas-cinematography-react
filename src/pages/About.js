import React from 'react';

import { Typography } from '@material-ui/core';

import { aboutMe } from '../Data';
import Metas from '../components/Metas';
import ImageCard from '../components/ImageCard';

const About = () => {
    return (
        <>
            <Metas
                title="About Me - Manas Tiwari | Cinematographer"
            />
            <ImageCard
                src="/about.jpg"
                height="400"
                alt="Banner"
                title="Banner"
            >
                <Typography variant="h4" component="h1" align="left" gutterBottom>
                    About Me
                </Typography>
                {aboutMe.map((paragraph, index) => {
                    return (
                        <Typography key={`para-${index}`} variant="body1" component="p" align="left" gutterBottom>
                            {paragraph}
                        </Typography>
                    );
                })}
            </ImageCard>
        </>
    );
};

export default About;