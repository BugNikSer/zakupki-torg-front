import React, { useState, useEffect } from 'react';
import Loading from './Loading';

const FetchContainer = (props) => {
    const { url, Component, state } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((data) => data.json())
            .then((data) => {
                setIsLoading(false);
                setData(data);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
            });
    }, [url]);

    if (error) {
        return <div>Error: {JSON.stringify(error)}</div>;
    }
    if (isLoading) {
        return <Loading />
    }
    if (data === null) {
        return <span>hmmmmmm</span>;
    }

    return <Component data={data} state={state} />;
};

export default FetchContainer;
