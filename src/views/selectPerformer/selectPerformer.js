import React from 'react';
import Performer from '../../components/performer/performer';
import './selectPerformer.css';

class SelectPerformerView extends React.Component {

  voteNow = () => {
    console.log(this.props);
    this.props.history.push('/thanks');
    // should also log user out via firebase
  }

  render () {
    return (
      <div className="greetingText">
        <h1>Please Select Your Favorite Performer</h1>
        <Performer
          voteNow={this.voteNow}
        />
      </div>
    );
  }
}

export default SelectPerformerView;
