import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchOutline, BackspaceOutline } from 'react-ionicons';
import FetchContainer from '../../helpers/FetchContainer';
import { getProvidersListUrl } from '../../helpers/urls';

const Providers = ({ data, state: { titleInput, handleTitleInput } }) => {
    const renderProvider = ({ id, title }) => {
        return (
            <tr>
                <td>
                    <Link to={`/providers/${id}`}>{title}</Link>
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
                    <tbody>{data.map(renderProvider)}</tbody>
                </table>
            </div>
        </section>
    );
};

const ProvidersContainer = () => {
    const [titleInput, setTitleInput] = useState('');

    const handleTitleInput = ({ target }) => {
        setTitleInput(target.value);
    };

    const getFilters = () => (titleInput === '' ? '' : `?title=${titleInput}`);

    return (
        <FetchContainer
            Component={Providers}
            url={getProvidersListUrl() + getFilters()}
            state={{ titleInput, handleTitleInput }}
        />
    );
};

export default ProvidersContainer;
