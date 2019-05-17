import React from 'react';
import './book.scss';


export default (props) => {
    const {id, name, image, rating, schedule = '12:30', status = 'not status', genres = [], openModal} = props;
    const img = (image === undefined || image === null) ? 'https://fcrmedia.ie/wp-content/themes/fcr/assets/images/default.jpg' : `https${image.medium.slice(4)}`
    const { average } = rating ? rating : 'Not rating';
    const { time } = schedule;
    return(
        <div onClick={() => openModal({...props})} className="card" key={id}>
            <div className="image">
                <img src={img} />
            </div>
            <div className="content">
                <div className="header">{name}</div>
                <div className="meta">
                    <a>{status}</a>
                </div>
                <div className="description">
                    {
                        genres.map((gen, i) => (<div key={i}> {gen} </div>))
                    }
                </div>
            </div>
            <div className="extra content">
                <span className="right floated">
                    Добавлена {time}
                </span>
                <span>
                    <i className="user icon"></i>
                    Рейтинг {average}
                </span>
            </div>
        </div>
    )
}