import React from 'react';
import ListItem from '../ListItem/ListItem';
import './ListWrapper.css';

function ListWrapper({ data }) {

    return (
        <div className="content-wrapper">
            {
                data && data.length > 0 && 
                    data.map((item, i) => (
                        <ul key={i + 1}>
                            <ListItem node={item} />
                        </ul>
                    ))
            }
        </div>
    )
}

export default ListWrapper;
