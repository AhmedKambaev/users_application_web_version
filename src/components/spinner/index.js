import React from 'react';

const styles = {
    position: 'absolute',
    left: 0 + 'px',
    right: 0 + 'px',
    top: 0 + 'px',
    bottom: 0 + 'px'
};

const Spinner = () => {
    return (
        <div className="ui segment" style={styles}>
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Загрузка</div>
            </div>
            <p></p>
        </div>
    );
}

export default Spinner;