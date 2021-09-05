import React from 'react';
import { useLocation } from 'react-router';
import { getProviderUrl } from '../../helpers/urls';
import FetchContainer from '../../helpers/FetchContainer';

const ProviderDetail = ({ data }) => {
    return (
        <section className='page'>
            <div className='head'>{data.title}</div>
        </section>
    );
};

export default () => {
    const id = useLocation().pathname.split('/')[2];
    return (
        <FetchContainer Component={ProviderDetail} url={getProviderUrl(id)} />
    );
};
