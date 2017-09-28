import React from 'react';
import Photo from './Photo.js';
// 2.	Build your app components according to the provided mockup.
// Most components should be stateless functional components that focus on the UI rather than behavior. 

//c.	A component for each category you wish to display. 
//For example, a Sunset component, a Flowers component, and a Clouds component.

const PhotoList = (props) => {
    const results = props.photos,
        query = props.query;
    let searchResults = results.map(photo =>
        <Photo url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
    );
        return (
            <div className="photo-container">
                <h2>{query}</h2>
                <ul>
                    {searchResults}
                </ul>
            </div>
        );
}

export default PhotoList;