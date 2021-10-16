import { useState } from 'react'

function WithCollapse() {

    const [isCollapsed, setIsCollapsed] = useState(true);   

    const collapseAll = (e) => {
        setIsCollapsed(true);
    }

    return ({
        isCollapsed,
        collapseAll,
        setIsCollapsed
    })
}

export default WithCollapse;

