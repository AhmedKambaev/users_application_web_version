import React from 'react';

export default ({onSearchChange, value}) => {
    return(
        <div className="ui icon input">
            <input onChange={onSearchChange} value={value} key="editor1" type="text" placeholder="Search..." />
            <i className="inverted circular search link icon"></i>
        </div>
    )
}