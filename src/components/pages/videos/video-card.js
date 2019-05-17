import React from 'react';
import './videos.scss';


export default ({video, onVideoSelect}) => {
    const image = video.snippet.thumbnails.medium.url ? video.snippet.thumbnails.medium.url : 'https://doc.louisiana.gov/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'
    return(
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" src={image} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    )
}