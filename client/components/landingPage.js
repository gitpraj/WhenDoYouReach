import React, { Component } from 'react';

// App component
class LandingPage extends Component {

  constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
      return (
        <div className="container center">
          <div className="btn-group-vertical">
            <button type="button" className="btn btn-primary btn-lg">Client</button>
            <button type="button" className="btn btn-primary btn-lg">Customers</button>
          </div>
        </div>
      )

    }
}

// LandingPage.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }

export default LandingPage;
