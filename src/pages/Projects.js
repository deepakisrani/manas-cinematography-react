import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

import Metas from '../components/Metas';
import Youtube from '../components/Youtube';
import { projects, firstVideo } from '../Data';
import VideoList from '../components/VideoList';

const Projects = () => {
    const [selectedVideo, setSelectedVideo] = useState(firstVideo);

    return (
        <>
            <Metas title="Projects - Manas Tiwari | Cinematographer" />
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant="h4" component="h1" align="center" gutterBottom>
                        Projects
                    </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper elevation={3} className="video-container">
                        <div className="margin-bottom-15">
                            <Youtube videoId={selectedVideo.video_id} title={selectedVideo.title} />
                        </div>
                        <Typography variant="h5" component="span" align="left" gutterBottom>
                            {selectedVideo.title}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper>
                        <VideoList
                            projects={projects}
                            onSelect={setSelectedVideo}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </>
    );
};

export default Projects;