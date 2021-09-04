import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import items from './items';

const Menu = (props) => {
    const renderItem = ({ label, link }) => {
        return (
            <Link to={`/${link}`}>
                <ion-icon name="ellipse-outline"></ion-icon>
                <div className='item' key={`menu_item_${link}`}>
                    {label}
                </div>
            </Link>
        );
    };

    return (
        <section className='menu'>
            <Link to='/'>
                <div className='logo'>ZakupkiTorg</div>
            </Link>
            <div className="login">Войти</div>
            {items.map((item) => renderItem(item))}
        </section>
    );
};

export default Menu;
