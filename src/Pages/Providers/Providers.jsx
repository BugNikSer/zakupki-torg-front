import React from 'react';
import { Link } from 'react-router-dom';
import { SearchOutline, BackspaceOutline } from 'react-ionicons';
import FetchContainer from '../../helpers/FetchContainer';
import { getProvidersListUrl } from '../../helpers/urls';

const Providers = ({ data }) => {
    const renderProvider = ({ _id, title }) => {
        return (
            <tr>
                <td>
                    <Link to={`/providers/${_id}`}>{title}</Link>
                </td>
                <td></td>
            </tr>
        );
    };

    return (
        <section className='page'>
            <div className='head'>
                Поставщики конкурируют друг с другом за право выполнить условие
                аукциона
            </div>
            <div className='scrollable'>
                <table className='content-container'>
                    <thead>
                        <tr>
                            <td>
                                <input type='text' />
                            </td>
                            <td>
                                <SearchOutline />
                                <BackspaceOutline />
                            </td>
                        </tr>
                    </thead>
                    <tbody>{data.map(renderProvider)}</tbody>
                </table>
            </div>
        </section>
    );
};

export default () => (
    <FetchContainer Component={Providers} url={getProvidersListUrl()} />
);
