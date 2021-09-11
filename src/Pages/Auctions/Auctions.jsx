import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOutline, BackspaceOutline } from 'react-ionicons';
import FetchContainer from '../../helpers/FetchContainer';
import { getAuctionsListUrl } from '../../helpers/urls';
import './Auctions.scss';

const Auctions = ({ data }) => {
    const renderAuction = ({ id, customerId, procedure, budget, customer }) => {
        return (
            <tr>
                <td>
                    <Link to={`/auctions/${id}`}>{id}</Link>
                </td>
                <td>{budget}</td>
                <td>{procedure}</td>
                <td>
                    <Link to={`/customers/${customerId}`}>{customer}</Link>
                </td>
                <td></td>
            </tr>
        );
    };

    return (
        <section className='page'>
            <div className='head'>
                Аукционы создаются заказчиками, а поставщики борются за право
                выполнить условие
            </div>
            <div className='scrollable'>
                <table className='content-container'>
                    <thead>
                        <tr>
                            <td>
                                <article>Лот</article>
                            </td>
                            <td>
                                <article>Бюджет</article>
                            </td>
                            <td>
                                <article>Процедура</article>
                            </td>
                            <td>
                                <article>Заказчик</article>
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <input type='text' />
                            </td>
                            <td>
                                <input type='text' />
                            </td>
                            <td>
                                <input type='text' />
                            </td>
                            <td>
                                <input type='text' />
                            </td>
                            <td>
                                <SearchOutline />
                                <BackspaceOutline />
                            </td>
                        </tr>
                    </thead>
                    <tbody>{data.map(renderAuction)}</tbody>
                </table>
            </div>
        </section>
    );
};

export default () => (
    <FetchContainer Component={Auctions} url={getAuctionsListUrl()} />
);
