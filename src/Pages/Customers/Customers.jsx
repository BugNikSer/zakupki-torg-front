import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOutline, BackspaceOutline } from 'react-ionicons';
import FetchContainer from '../../helpers/FetchContainer';
import { getCustomersListUrl } from '../../helpers/urls';

const Customers = ({ data }) => {
    const renderCustomer = ({ _id, title }) => {
        return (
            <tr key={`customer_row_${_id}`}>
                <td>
                    <Link to={`/customers/${_id}`}>{title}</Link>
                </td>
                <td></td>
            </tr>
        );
    };

    return (
        <section className="page">
            <div className="head">Заказчики являются организаторами аукционов</div>
            <div className="scrollable">
                <table className="content-container">
                    <thead>
                        <tr>
                            <td>
                                <input type="text" />
                            </td>
                            <td>
                                <SearchOutline />
                                <BackspaceOutline />
                            </td>
                        </tr>
                    </thead>
                    <tbody>{data.map(renderCustomer)}</tbody>
                </table>
            </div>
        </section>
    );
};

export default () => (
    <FetchContainer Component={Customers} url={getCustomersListUrl()} />
);
