import React from 'react';
import './resultsView.css';

class ResultsView extends React.Component {
  state = {
    showResults: false,
  }

  toggleView = (e) => {
    this.setState({showResults: !this.state.showResults});
  };

  // componentDidMount = () => {
  //   const isSafari = navigator.userAgent.indexOf("Safari") > -1;
  //   // if ((isSafari) && (isSafari)) { isSafari = false; }
  //   if (isSafari) {
  //     if (!document.cookie.match(/^(.*;)?\s*fixed\s*=\s*[^;]+(.*)?$/)) {
  //       document.cookie = 'fixed=fixed; expires=Tue, 19 Jan 2038 03:14:07 UTC; path=/';
  //       // window.location.replace("https://pollev.com/leotaylor655");
  //       document.cookie.replace("testCookie");
  //     }
  //   }
  // }

  render () {
    const welcomeText = this.state.showResults ? "Thank You For Voting" : "Rank Your Favorite Performers";
    return (
      <div className="resultsContainer col-sm-12">
        <h1 className="resultsView">{welcomeText}</h1>
        <div className="resultDisplay">
          {this.state.showResults ?
            // <iframe className="col-xs-12 actualResults" src="https://embed.polleverywhere.com/ranking_polls/wGriQAnkOVaUoG78C6sbO?controls=none&short_poll=true" width="800" height="600" frameBorder="0" title="Rankings Results"></iframe>
            <iframe className="col-xs-12 actualResults"src="https://embed.polleverywhere.com/ranking_polls/aVYfM308HAfQEq2txN8af?controls=none&short_poll=true" width="800" height="600" frameBorder="0" title="Rankings Results"></iframe>
            :
            <div className='resultsContainer'>
              <iframe className="col-xs-12" src="https://pollev.com/leotaylor655" width="800" height="900" frameBorder="0" title="Rankings Poll"></iframe>
              <button className="btn col-xs-12 resultsButton" onClick={this.toggleView}>SEE RESULTS</button>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default ResultsView;
