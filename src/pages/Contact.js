import React from 'react';
import { Typography } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';

import ImageCard from '../components/ImageCard';
import Metas from '../components/Metas';

const Contact = () => {
    return (
        <>
            <Metas title="Contact Me - Manas Tiwari | Cinematographer" />
            <ImageCard
                src="/contact.jpg"
                height="300"
                alt="Contact"
                title="Contact"
                style={{ height: "100%" }}
            >
                <Typography variant="h4" component="h1" align="center" gutterBottom>
                    Contact Me
                </Typography>
                <Typography variant="body1" component="div" align="center" gutterBottom>
                    <div className="contact-detail-container">
                        <EmailIcon fontSize="small" />
                        <span className="icon-text">Email: <a className="unstyled-link" href="mailto: manas.tiwari.01@gmail.com">manas.tiwari.01@gmail.com</a></span>
                    </div>
                </Typography>
                <Typography variant="body1" component="div" align="center" gutterBottom>
                    <div className="contact-detail-container">
                        <PhoneIcon fontSize="small" />
                        <span className="icon-text">Phone: <a className="unstyled-link" href="tel: +918600278456">+91-8600278456</a></span>
                    </div>
                    
                </Typography>
            </ImageCard>
        </>        
    );
};

export default Contact;