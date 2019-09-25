import React, { Component } from 'react';
import { connect } from 'react-redux';
import Inputs from './components/inputs';
import View from './components/view';
import { clear_Reminder } from './actions';

class App extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-6">
                  <h1>APP</h1>
                  <Inputs />
                  <button onClick={ this.props.clear_Reminder }>Clear Reminders</button>
               </div>
               <div className="col-6">
                  <View />
               </div>
            </div>
         </div>
      )
   }
}

export default connect(null, { clear_Reminder })(App);