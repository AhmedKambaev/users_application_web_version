import React from 'react';


export default ({ service }) => {
    return(
        <div className="error-message">
            <div className="ui segment">
                <h4 className="ui header">Извините произошла ошибка в {service}!</h4>
                <p>Мы уже занимаемся этой проблемой, а пока посотрите другие услуги</p>
            </div>
        </div>
    );
}