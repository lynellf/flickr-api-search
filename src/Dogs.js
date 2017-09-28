import React from 'react';
import Results from './Results.js';


const Dogs = (props) => {
    return (
        <Results query={"dogs"} api={props.api} />
    );
}

export default Dogs;