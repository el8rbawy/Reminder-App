import React, { Component } from 'react';
import Inputs from './components/inputs';
import View from './components/view';

class App extends Component {
   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-6">
                  <h1>APP</h1>
                  <Inputs />
                  <button>Clear Reminders</button>
               </div>
               <div className="col-6">
                  <View />
               </div>
            </div>
         </div>
      )
   }
}

export default App;