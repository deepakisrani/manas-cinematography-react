import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Grid, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import PreviewCard from './PreviewCard';


const generatePreviewList = (videos, onSelect) => {
    return videos.map((video) => {
        return(
            <Grid item xs={12} style={{ marginBottom: '10px' }}>
                <PreviewCard
                    src={`http://i3.ytimg.com/vi/${video.video_id}/maxresdefault.jpg`}
                    onClick={() => onSelect(video)}
                    title={video.title}
                    alt={video.title}
                    height="100"
                />
            </Grid>
        );
    });
};

const VideoList = (props) => {
    return (
        <>
            {props.projects.map((project, index) => {
                return(
                    <Accordion defaultExpanded={index === 0}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={project.client_name}
                            id={project.client_name}
                        >
                            <Typography>
                                <strong>{project.client_name}</strong>
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Grid item container direction="column" spacing={3}>
                                {generatePreviewList(project.videos, props.onSelect)}
                            </Grid>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </>
    );
};

export default VideoList;