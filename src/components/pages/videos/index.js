import React from 'react';
import Header from '../../header-component';
import Spinner from '../../spinner';
import SearchVideo from '../../search-videos';
import VideoCard from './video-card';
import VideoDetail from './videoDetail';
import ErrorMessage from '../../error-message';
import './videos.scss';


class VideosPage extends React.Component {

    componentDidMount() {
        this.props.loadedVideos('море');
    }

    render() {
        const { authUser, userLogout, navigator, onTermSubmit, 
            videos = [], videosLoading, onVideoSelect, selectVideo, errorVideosLoading, onSubmitVideos } = this.props;
        if(authUser) {
            return(
                <div>
                    <Header navigator={navigator} userLogout={userLogout} />
                    <div className="search-books-block">
                        <div className="container container-search-bar">
                            <div>
                                <form onSubmit={onSubmitVideos}>
                                    <SearchVideo onTermSubmit={onTermSubmit} />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="section-videos-container">
                        {
                            errorVideosLoading ? <ErrorMessage service="Youtube" /> :

                            videosLoading ? 
                            <div onClick={onSubmitVideos} className="ui segment message-loading">
                                <h4 className="header ui">Нажмите Enter чтобы начать поиск</h4>
                                <p>Но можешь нажать на это сообщение</p>
                            </div>
                            : 
                            <section className="videos-section books-sections container-books">
                                <div className="video-detail-container">
                                    <VideoDetail video={selectVideo} />
                                </div>
                                <div className="ui list">
                                    {videos.map((video, i) => <VideoCard key={i} video={video} onVideoSelect={onVideoSelect} />)}
                                </div>
                            </section>
                        }
                    </div>
                </div>
            );
        }
        return(
            <div className="not-user">Вы ещё не найдены...</div>
        );
    }
}

export default VideosPage;

