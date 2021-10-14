import React, { useContext, useEffect } from 'react';
import WithCollapse from '../WithCollapse/WithCollapse';
import AppContext from '../../contexts/AppContext';
import './ListItem.css';

function ListItem({ isCollapsed, setIsCollapsed, collapseAll, name, countries }) {

    const { closeTabs, setCloseTabs } = useContext(AppContext);

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
                                                countries.map((item, i) => {
                                                    if ((countries.length - 1) === i) {
                                                        return (
                                                            <li key={i + 1} onClick={() => setCloseTabs(true)} className="level-2"><p>{item.name}</p></li>
                                                        )
                                                    } else {
                                                        return (
                                                            <li key={i + 1} className="level-2"><p>{item.name}</p></li>
                                                        )
                                                    }
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
