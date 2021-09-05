import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { getCustomerUrl } from '../../helpers/urls';
import FetchContainer from '../../helpers/FetchContainer';

const CustomerDetail = ({ data }) => {
    const renderAuction = ({ _id, procedure, budget }) => {
        return (
            <tr>
                <td>
                    <Link to={`/auctions/${_id}`}>{_id}</Link>
                </td>
                <td>{budget}</td>
                <td>{procedure}</td>
            </tr>
        );
    };
    console.log(data);
    return (
        <section className='page'>
            <div className='head'>{data.title}</div>
            <div className='scrollable'>
                <table className='content-container'>
                    <thead>
                        <tr>
                            <td colspan={3}>Аукционы заказчика</td>
                        </tr>
                    </thead>
                    <tbody>{data.auctions.map(renderAuction)}</tbody>
                </table>
            </div>
        </section>
    );
};

export default () => {
    const id = useLocation().pathname.split('/')[2];
    return (
        <FetchContainer Component={CustomerDetail} url={getCustomerUrl(id)} />
    );
};
