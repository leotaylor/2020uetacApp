import React from 'react';
import './thankYouView.css';

class ThankYouView extends React.Component {

  seeResults = () => {
    this.props.history.push('/results');
  }

  render () {
    return (
      <div>
        <h1 className="thankYou">Thank You For Voting!</h1>
        <button className='btn btn-success' onClick={this.seeResults}>See Results!</button>
      </div>
    );
  }
}

export default ThankYouView;
