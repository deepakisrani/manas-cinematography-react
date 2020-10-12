import '../styling/Youtube.css';

import React from 'react';

const Youtube = ({ videoId, title }) => {
    return (
        <div class="aspect-ratio--16x9">
            <div class="aspect-ratio__inner-wrapper">
                <iframe class="youtube-video" title={title} src={`https://www.youtube.com/embed/${videoId}`}></iframe>
            </div>
        </div>
    );
};

export default Youtube;