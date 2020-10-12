import React from 'react';
import { Helmet } from 'react-helmet';

const Metas = (props) => {
    return (
        <Helmet>
            { props.title ? <title>{props.title}</title> : null }
            { props.description ? <meta name="description" content={props.description} /> : null }
        </Helmet>
    );
};

export default Metas;