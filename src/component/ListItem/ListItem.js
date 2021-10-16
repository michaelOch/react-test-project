import React, { useContext, useState, useEffect } from 'react';
import WithCollapse from '../WithCollapse/WithCollapse';
import AppContext from '../../contexts/AppContext';
import ListWrapper from '../ListWrapper/ListWrapper';
import './ListItem.css';

function ListItem({ node }) {

    const { isCollapsed, setIsCollapsed, collapseAll } = WithCollapse();

    const { closeTabs, setCloseTabs } = useContext(AppContext);

    const { name, countries, languages } = node;

    const [children, setChildren] = useState();

    useEffect(() => {
        if (countries) {
            setChildren(countries);
        } else if (languages) {
            setChildren(languages);
        }
    }, [countries, languages]);

    useEffect(() => {
        if (closeTabs) {
            collapseAll();
        }
    }, [closeTabs, collapseAll]);

    const handleToggle = () => {
        if (children) {
            setIsCollapsed(!isCollapsed);
        } else {
            setCloseTabs(true);
        }
    }

    return (
        <li className="level">
            <span className="arrow"></span>
            <p className="label toggle" onClick={handleToggle}>{name}</p>
                {
                    (!isCollapsed) && children && children.length > 0 && 
                        <ListWrapper 
                            data={children} 
                        />
                }
        </li>
    )
}

export default ListItem;
