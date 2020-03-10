import React from 'react';
import './adminView.css';

class AdminView extends React.Component {
  render () {
    return (
      <div>
        <h1 className="adminView">Admin Page</h1>
        <p>Will not allow admin to register but instead use a LEO created userName and Password</p>
      </div>
    );
  }
}

export default AdminView;
