import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './menu.scss';


const Menu = ({authUser, userLogout, navigator}) => {
    const _indicatorUser = () => {
        if(authUser) {
            return (
                <Button onClick={() => userLogout(navigator)} className="logout-button" variant="contained" color="secondary">
                    <span className="color-white">Выйти</span>
                </Button>
            );
        }
    }

    const _openMenu = (e) => {
        if(!e.target.classList.contains('navigator')) {
            const menu = document.querySelector('.menu-navigator');
            menu.classList.toggle('open-menu');
        }
    }

    return(
        <nav className="d-flex menu justify-content-between align-items-center">
            <div className="logo">
                <a href="#">Logotype</a>
            </div>
            <div className="menu-navigator" onClick={_openMenu}>
                <div className="d-flex align-items-center navigator">
                    <ul className="d-flex navigator">
                        <li>
                            <Link to="/video">Видео</Link>
                        </li>
                        <li>
                            <Link to="/books">Книги</Link>
                        </li>
                        <li>
                            <Link to="/search-image">Картинки</Link>
                        </li>
                        <li>
                            <Link to="/music">Музыка</Link>
                        </li>
                    </ul>
                    {_indicatorUser()}
                </div>
            </div>
            <button className="burger-button" onClick={_openMenu}></button>
        </nav>
    );
}

export default Menu;