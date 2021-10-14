import React from 'react';

const WithCollapse = (Component) => 
    class HOC extends React.Component {

        constructor () {
            super ();
            this.setIsCollapsed = this.setIsCollapsed.bind(this);
            this.collapseAll = this.collapseAll.bind(this);
        }

        state = {
            isCollapsed: true
        }

        setIsCollapsed = (e) => {
            this.setState({
                isCollapsed: !this.state.isCollapsed
            });
        }

        collapseAll = (e) => {
            this.setState({
                isCollapsed: true
            })
        }

        render() {
            return (
                <Component 
                    {...this.props}
                    isCollapsed={this.state.isCollapsed} 
                    setIsCollapsed={this.setIsCollapsed} 
                    collapseAll={this.collapseAll}
                />
            )
        }
    }

export default WithCollapse;
