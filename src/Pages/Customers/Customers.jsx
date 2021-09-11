import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BackspaceOutline } from 'react-ionicons';
import FetchContainer from '../../helpers/FetchContainer';
import { getCustomersListUrl } from '../../helpers/urls';

const Customers = ({ data, state: { titleInput, handleTitleInput } }) => {
    const renderCustomer = ({ id, title }) => {
        return (
            <tr key={`customer_row_${id}`}>
                <td>
                    <Link to={`/customers/${id}`}>{title}</Link>
                </td>
                <td></td>
            </tr>
        );
    };

    return (
        <section className='page'>
            <div className='head'>
                Заказчики являются организаторами аукционов
            </div>
            <div className='scrollable'>
                <table className='content-container'>
                    <thead>
                        <tr>
                            <td>
                                <input
                                    value={titleInput}
                                    onChange={handleTitleInput}
                                    type='text'
                                />
                            </td>
                            <td>
                                <BackspaceOutline
                                    onClick={() => {
                                        handleTitleInput({
                                            target: { value: '' },
                                        });
                                    }}
                                />
                            </td>
                        </tr>
                    </thead>
                    <tbody>{data.map(renderCustomer)}</tbody>
                </table>
            </div>
        </section>
    );
};

const CustomersContainer = () => {
    const [titleInput, setTitleInput] = useState('');

    const handleTitleInput = ({ target }) => {
        setTitleInput(target.value);
    };

    const getFilters = () => (titleInput === '' ? '' : `?title=${titleInput}`);

    return (
        <FetchContainer
            Component={Customers}
            url={getCustomersListUrl() + getFilters()}
            state={{ titleInput, handleTitleInput }}
        />
    );
};

export default CustomersContainer;
