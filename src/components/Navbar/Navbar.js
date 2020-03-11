import React from 'react';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
  render () {
    return (
      <div className="Navbar">
        <nav className="navbar navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">Elvis Week 2020</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;
