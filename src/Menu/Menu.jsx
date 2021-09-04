import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EllipseOutline, Ellipse } from 'react-ionicons';
import './Menu.scss';
import items from './items';

const Menu = (props) => {
    const page = useLocation().pathname.split('/')[1];
    const iconProps = {
        height: '10px',
        width: '10px',
    };

    const renderItem = ({ label, link }) => {
        return (
            <Link to={`/${link}`} key={`menu_item_${link}`}>
                <div className='item'>
                    {link === page ? (
                        <Ellipse {...iconProps} color='#fff'/>
                    ) : (
                        <EllipseOutline {...iconProps} color='#00000'/>
                    )}
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
            <div className='login'>Войти</div>
            {items.map((item) => renderItem(item))}
        </section>
    );
};

export default Menu;
