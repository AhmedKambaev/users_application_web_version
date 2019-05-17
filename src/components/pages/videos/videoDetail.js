import React from 'react';
import Spinner from '../../spinner';


const defaultVideo = {
    id: {
        videoId: 'feRFJkFHhrU'
    },
    snippet: {
        description: "Какой плейлист для современного, уставшего человека самый нужный, чтобы можно было с удовольствием все...",
        liveBroadcastContent: "none",
        publishedAt: "2018-07-22T17:30:17.000Z",
        title: "Нежный Шум Моря и Звук Волны, Морской Прибой, Море 3 Часа Для Сна"
    }   
}


const VideoDetail = ({video = defaultVideo}) => {
    
    if(!video) {
        video = defaultVideo;
    }
    
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;