import React from 'react';
import './modal.scss';


export default ({data, closeModal}) => {
    const { image, name, rating, summary, language, 
    premiered, officialSite, network = {} } = data;
    const img = (image === undefined || image === null) ? 'https://fcrmedia.ie/wp-content/themes/fcr/assets/images/default.jpg' : `https${image.medium.slice(4)}`;
    const { country } = network ? network : {name: 'Неизвестно'};
    const { average } = rating ? rating : '0';

    const paragArray = [
        {
            text: 'Язык',
            value: language || 'Неизвестно'
        },
        {
            text: 'Премьера',
            value: premiered || 'Неизвестно'
        },
        {
            text: 'Официальный сайт',
            value: officialSite || 'Неизвестно'
        },
        {
            text: 'Страна',
            value: country ? country.name || 'Неизвестно' : 'Неизвестно'
        }
    ];

    return(
        <div className="modal-container" onClick={closeModal}>
            <div className="modal">
                <div className="d-flex block-content">
                    <div className="content-image">
                        <img src={img} />
                    </div>
                    <div className="content-books">
                        <h4>{name || 'Неизвестно'}</h4>
                        <div className="statistic">Рейтинг: <span>{average || '0'}</span></div>
                        {
                            paragArray.map(({text, value}, i) => {
                                return <div key={i} className="statistic">{text}: <span>{value}</span></div>
                            })   
                        }
                    </div>
                </div>
                <h4 className="media-title d-none text-center">{name || 'Неизвестно'}</h4>
                <p className="ui segment text-information">{summary || 'Not text'}</p>
            </div>
        </div>
    )
}