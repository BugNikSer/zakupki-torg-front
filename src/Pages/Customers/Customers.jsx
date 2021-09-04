import React from 'react';
import FetchContainer from '../../helpers/FetchContainer';
import { getCustomersListUrl } from '../../helpers/urls';

const Customers = ({ data }) => {
    const renderCustomer = ({ _id, title }) => {
        return (
            <tr key={`customer_row_${_id}`}>
                <td>{title}</td>
            </tr>
        );
    };

    return (
        <section className='customers'>
            <h1>Заказчики</h1>
            <table>
                <tbody>{data.map(renderCustomer)}</tbody>
            </table>
        </section>
    );
};

export default () => (
    <FetchContainer Component={Customers} url={getCustomersListUrl()} />
);
