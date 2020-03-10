import React from 'react';
import {Link} from 'react-router-dom';

// import authRequests from '../../firebaseRequests/auth';

class Navbar extends React.Component {
  render () {
    // const {authed, logout} = this.props;
    // const logoutClickEvent = (e) => {
    // //   authRequests.logoutUser();
    //   logout();
    // };
    return (
      <div className="Navbar">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">LEO Events</Link>
            </div>
            {/* {
              authed ? (
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to="/results">Results</Link></li>
                  <li className="navbar-form">
                    <button onClick={logoutClickEvent} className="btn btn-danger">Logout</button>
                  </li>
                </ul>
              ) : (
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    ''
                  </li>
                </ul>
              )
            } */}
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;
