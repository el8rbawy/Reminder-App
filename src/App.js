import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Inputs from './components/inputs';
import View from './components/view';

class App extends Component {
   render() {
      return (
         <div className="app">
            <div className="container">
               <h1>Reminder of all your appointments</h1>
               <div className="row justify-content-center">
                  <div className="col-auto">
                     <Inputs />
                  </div>
                  <div className="col-auto" style={{width: "350px"}}>
                     <View />
                  </div>
               </div>
            </div>
            <ToastContainer pauseOnHover={false} />
         </div>
      )
   }
}

export default App;