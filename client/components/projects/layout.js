import React from 'react'

class Layout extends React.Component
{
	constructor(props) {
		super(props);
	}

	render () {
        return (

            <div>
        			<div>
        				{this.props.children}
        			</div>
            </div>
        );
    }
}

export default Layout;
