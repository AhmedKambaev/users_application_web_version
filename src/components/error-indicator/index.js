import React from 'react';
import './error.scss';

const style = {
    width: '350px',
    marginLeft: '20px',
    marginTop: '20px',
    display: 'inline-block'
};

const ErrorIndicator = () => {
    return (
        <div className="error-container">
            <img src="https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png" alt="error image"/>
            <h1>Произошла ошибка! Просим прощения</h1>
            <h2>Мы разберёмся с этой проблемой, просим зайдите позже.</h2>
        </div>
    );
};


export default ErrorIndicator;

