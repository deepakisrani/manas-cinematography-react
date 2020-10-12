import React from 'react';

import { ButtonBase, Grid, Paper, Typography } from '@material-ui/core';

const PreviewCard = (props) => {
    return (
        <Paper elevation={3} style={{ paddingLeft: "10px", paddingRight: "5px"}}>
            <Grid onClick={props.onClick} container alignItems="center" spacing={3} direction="row">
                <Grid item xs={5}>
                    <ButtonBase>
                        <img height={props.height} src={props.src} title={props.title} alt={props.alt} />
                    </ButtonBase>
                </Grid>
                <Grid item container direction="column" xs={7}>
                    <Grid item>
                        <Typography gutterBottom variant="subtitle1">
                            {props.title}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default PreviewCard;