import React from 'react';
import { useLocation } from 'react-router';
import { getAuctionUrl } from '../../helpers/urls';
import { Link } from 'react-router-dom';
import FetchContainer from '../../helpers/FetchContainer';

const AuctionDetail = ({ data }) => {
    return (
        <section className='page'>
            <table className='auction'>
                <tbody>
                    <tr>
                        <td>Лот:</td>
                        <td>{data._id}</td>
                    </tr>
                    <tr>
                        <td>Процедура:</td>
                        <td>{data.procedure}</td>
                    </tr>
                    <tr>
                        <td>Бюджет:</td>
                        <td>{data.budget}</td>
                    </tr>
                    <tr>
                        <td>Заказчик: </td>
                        <td>
                            <Link to={`/customers/${data.customerId}`}>{data.customer}</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default () => {
    const id = useLocation().pathname.split('/')[2];
    return <FetchContainer Component={AuctionDetail} url={getAuctionUrl(id)} />;
};
