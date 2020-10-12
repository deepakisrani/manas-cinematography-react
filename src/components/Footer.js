import React from 'react';

import { Container, Divider, Typography } from '@material-ui/core';

const Footer = () => {
    return (
        <footer>
            <Divider />
            <Container classes={{ root: "footer-container" }} component="div">
                <Typography variant="body1" component="div" align="center" gutterBottom>
                    &copy; {(new Date()).getFullYear()} Manas Tiwari
                </Typography>
                <Typography variant="body1" component="div" align="center" gutterBottom>
                    Email: <a className="unstyled-link" href="mailto: manas.tiwari.01@gmail.com">manas.tiwari.01@gmail.com</a>
                </Typography>
                <Typography variant="body1" component="div" align="center" gutterBottom>
                    Phone: <a className="unstyled-link" href="tel: +918600278456">+91-8600278456</a>
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;