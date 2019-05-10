import React, { Component } from 'react';
import Menu from './menu';

export default class Header extends Component {
    render() {
        const { navigator, userLogout } = this.props;
        return(
            <header>
                <Menu authUser={true} userLogout={userLogout} navigator={navigator} />
            </header>
        );
    }
}