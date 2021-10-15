import React, { useContext, useEffect } from 'react';
import WithCollapse from '../WithCollapse/WithCollapse';
import AppContext from '../../contexts/AppContext';

function ListInner({ isCollapsed, setIsCollapsed, collapseAll, country }) {

    const { closeTabs, setCloseTabs } = useContext(AppContext);

    useEffect(() => {
        if (closeTabs) {
            collapseAll();
        }
    }, [closeTabs, collapseAll]);

    return (
        <li className="level-2">
            <span className="arrow">--</span>
            <p className="label toggle" onClick={() => setIsCollapsed(!isCollapsed)}>{country.name}</p>
            {
                (!isCollapsed) && <ul className="">
                    {
                        country.languages ?
                            country.languages.length > 0 ?
                                country.languages.map((language, i) => {
                                        if((country.languages.length - 1) === i) {
                                            return (
                                                <li key={i + 1} className="level-3" onClick={() => setCloseTabs(true)}>
                                                    <span className="arrow">--</span>
                                                    <p>{language.name}</p>
                                                </li>
                                            )
                                        } else {
                                            <li key={i + 1} className="level-3">
                                                <span className="arrow">--</span>
                                                <p>{language.name}</p>
                                            </li>
                                        }
                                            
                                    })
                                : null
                            : null
                    }
                </ul>
            }
        </li>
    )
}

export default WithCollapse(ListInner);
