import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Signin from './Signin';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false
    }
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    //const { isSignedIn, route} = this.state;
    return (
      <div className="App">
        {/* { route === 'home'
        ? <div>
            <Button className='lgButton button'></Button>
          </div>
          : (
            <Signin onRouteChange={this.onRouteChange}/>
          )
        } */}
        <div>
            <Button 
            onClick= {() => console.log('attention')}
            className='lgButton button'></Button>
          </div>
      </div>
    );
  }
}

export default App;
