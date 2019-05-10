import React from 'react';
import Header from '../../header-component';
import Spinner from '../../spinner';
import './videos.scss';


const VideosPage = ({ authUser, userLogout, navigator }) => {
    if(authUser) {
        return(
            <Header navigator={navigator} userLogout={userLogout} />
        );
    }
    return(
        <div className="not-user">Вы ещё не найдены...</div>
    );
}

export default VideosPage;

