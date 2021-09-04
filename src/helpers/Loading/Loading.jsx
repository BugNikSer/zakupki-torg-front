import React from 'react';
import { Cog } from 'react-ionicons';
import './Loading.scss'

const Loading = () => {
    return (
        <div className='loading'>
            <Cog
                rotate
                height='200px'
                width='200px'
            />
        </div>
    );
};

export default Loading;
