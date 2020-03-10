import React from 'react';
import './resultsView.css';

class ResultsView extends React.Component {
  state = {
    showResults: false,
  }

  toggleView = (e) => {
    console.log('click');
    this.setState({showResults: !this.state.showResults});
  };

  render () {
    const welcomeText = this.state.showResults ? "Thank You For Voting" : "Please Rank The Below Performers";

    return (
      <div className="resultsContainer col-sm-12">
        <h1 className="resultsView">{welcomeText}</h1>
        <div className="resultDisplay">
          {this.state.showResults ?
            <iframe className="col-xs-12 actualResults" src="https://embed.polleverywhere.com/ranking_polls/wGriQAnkOVaUoG78C6sbO?controls=none&short_poll=true" width="800" height="600" frameBorder="0" title="Rankings Results"></iframe>
            :
            <div className='resultsContainer'>
              <iframe className="col-xs-12" src="https://pollev.com/leotaylor655" width="800" height="900" frameBorder="0" title="Rankings Poll"></iframe>
              <button className="btn btn-danger col-xs-12 resultsButton" onClick={this.toggleView}>See Results</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default ResultsView;
