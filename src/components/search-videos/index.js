import React from 'react';

export default ({onTermSubmit}) => {
    return(
        <div className="ui icon input">
            <input onChange={onTermSubmit} key="editor2" type="text" placeholder="Search..." />
            <i className="inverted circular search link icon"></i>
        </div>
    )
}