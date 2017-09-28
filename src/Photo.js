import React from 'react';

const Photo = props => (
    <li key={props.id}>
        <img src={props.url} alt="" key={props.id} />
    </li>
);

export default Photo;