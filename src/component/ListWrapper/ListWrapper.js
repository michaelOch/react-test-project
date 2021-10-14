import React from 'react';
import ListItem from '../ListItem/ListItem';
import './ListWrapper.css';

function ListWrapper({ data }) {

    return (
        <div>
            {
                data ? 
                    data.length > 0 ? 
                        data.map((item, i) => {
                            return (
                                <ul key={i + 1}>
                                    <ListItem 
                                        name={item.name} 
                                        countries={item.countries} 
                                    />
                                </ul>
                            )
                        })
                        : null
                    : null
            }
        </div>
    )
}

export default ListWrapper;
