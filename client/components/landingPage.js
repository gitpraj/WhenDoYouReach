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
        <div className="center">
          <h1>landing Page</h1>
          <button>Users</button>
        </div>
      )

    }
}

// LandingPage.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }

export default LandingPage;
