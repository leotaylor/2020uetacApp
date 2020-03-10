import React from 'react';
import './performer.css';

class Performer extends React.Component {

  render () {
    return (
      <div className="cards row">
        <div className="card col-md-6" style={{width: "18rem"}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Elvis_Presley_Jailhouse_Rock.jpg/1200px-Elvis_Presley_Jailhouse_Rock.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title">Performer Name</h2>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <button className="btn btn-primary">VOTE</button>
          </div>
        </div>
        <div className="card col-md-6" style={{width: "18rem"}}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Elvis_Presley_Jailhouse_Rock.jpg/1200px-Elvis_Presley_Jailhouse_Rock.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h2 className="card-title">Performer Name 2</h2>
            <p className="card-text">Some quick example text.</p>
            <button className="btn btn-primary" onClick={this.props.voteNow}>VOTE</button>
          </div>
        </div>
      </div>

    );
  }
}

export default Performer;
