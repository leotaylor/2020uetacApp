import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render () {
    return (
      <div className="Navbar">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">LEO Events</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;
