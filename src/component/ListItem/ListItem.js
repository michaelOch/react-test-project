import React, { useContext, useEffect } from 'react';
import WithCollapse from '../WithCollapse/WithCollapse';
import AppContext from '../../contexts/AppContext';
import ListInner from '../ListInner/ListInner';
import './ListItem.css';

function ListItem({ isCollapsed, setIsCollapsed, collapseAll, name, countries }) {

    const { closeTabs } = useContext(AppContext);

    useEffect(() => {
        if (closeTabs) {
            collapseAll();
        }
    }, [closeTabs, collapseAll]);

    return (
        <li className="level-1">
            {
                name ? 
                    (
                        <div>
                            <p className="label toggle" onClick={() => setIsCollapsed(!isCollapsed)}>{name}</p>
                            {
                                (!isCollapsed) && <ul className="">
                                    {
                                        countries ? 
                                            countries.length > 0 ? 
                                                countries.map((country, i) => {
                                                    return (
                                                        <ListInner key={i + 1} country={country} />
                                                    )
                                                })
                                                : null
                                            : null
                                    }
                                </ul>
                            }
                        </div>
                    )
                    : null
            }
        </li>
    )
}

export default WithCollapse(ListItem);
