import React from 'react';
import { useLocation } from 'react-router';
import { getCustomerUrl } from '../../helpers/urls';
import FetchContainer from '../../helpers/FetchContainer';

const CustomerDetail = ({ data }) => {
    return (
        <section className='page'>
            <div className='head'>{data.title}</div>
        </section>
    );
};

export default () => {
    const id = useLocation().pathname.split('/')[2];
    return (
        <FetchContainer Component={CustomerDetail} url={getCustomerUrl(id)} />
    );
};
