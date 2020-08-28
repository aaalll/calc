import React from 'react';
import Display from './Display'
import Buttons from './Buttons'
import './App.scss';

class App extends React.Component{
    render(){
         return (
              <React.Fragment>
                  <Display />
                  <Buttons />
              </React.Fragment>
        );
    }
 
}

export default App