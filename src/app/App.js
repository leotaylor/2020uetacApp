// import React, { Component } from 'react';
// import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
// import SelectPerformerView from '../views/selectPerformer/selectPerformer';
// import ThankYouView from '../views/thankYouView/thankYouView';
// import Auth from '../views/authView/auth';
// import AdminView from '../views/admin/adminView';
// import ResultsView from '../views/resultsView/resultsView';
// import Navbar from '../components/Navbar/Navbar';
// import './App.css';

// const PrivateRoute = ({ component: Component, authed, ...rest}) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         authed === true ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/auth',
//               state: {from: props.location}}}
//           />
//         )
//       }
//     />
//   );
// };

// const PublicRoute = ({ component: Component, authed, ...rest}) => {
//   return (
//     <Route
//       {...rest}
//       render={props =>
//         authed === false ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: '/selectPerformer',
//               state: {from: props.location}}}
//           />
//         )
//       }
//     />
//   );
// };

// class App extends Component {
//   state = {
//     authed: true,
//   }

//   componentDidMount () {
//     this.setState({authed: true});
//   }

//   logout = () => {
//     this.setState({authed: false});
//   }

//   render () {
//     const authentication = this.state.authed;
//     const trueStuff = authentication === true;
//     return (
//       <div className="App">
//         <BrowserRouter>
//           <div>
//             <Navbar authed={this.state.authed} logout={this.logout} />
//             <div className="row">
//               <Switch>
//                 {
//                   trueStuff ? (
//                     <Route exact path="/" component={SelectPerformerView} />
//                   ) : (
//                     <Route exact path="/" component={Auth} />
//                   )
//                 }
//                 <PrivateRoute
//                   path="/selectPerformer"
//                   authed={this.state.authed}
//                   component={SelectPerformerView}
//                   // maybe add a role
//                 />
//                 <PrivateRoute
//                   path="/leoAdministration"
//                   authed={this.state.authed}
//                   component={AdminView}
//                   // for sure add a role
//                 />
//                 <PublicRoute
//                   path="/auth"
//                   authed={this.state.authed}
//                   component={Auth}
//                 />
//                 <Route
//                   path="/thanks"
//                   authed={this.state.authed}
//                   component={ThankYouView}
//                 />
//                 <Route
//                   path="/results"
//                   authed={this.state.authed}
//                   component={ResultsView}
//                 />
//               </Switch>
//             </div>
//           </div>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import ResultsView from '../views/resultsView/resultsView';
import Navbar from '../components/Navbar/Navbar';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar />
            <div className="row">
              <Switch>
                <Route
                  path="/results"
                  component={ResultsView}
                />
                <Route
                  path="/"
                  component={ResultsView}
                />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
