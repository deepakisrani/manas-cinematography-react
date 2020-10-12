import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia } from '@material-ui/core';

const ImageCard = (props) => {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component={props.component || "img"}
                    src={props.src}
                    height={props.height}
                    alt={props.alt}
                    title={props.title}
                />
                {props.children ? <CardContent>{props.children}</CardContent> : null }
            </CardActionArea>
        </Card>
    );
};

export default ImageCard;