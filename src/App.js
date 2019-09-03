import React, { Component } from 'react'
import {connect} from 'react-redux';

import {loginUser} from './redux/reducer';

class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
};

const mapStateToProps = (state) => state

// We now pass in an object containing the dispatchers as the second argument to map them to props
export default connect(mapStateToProps, {loginUser})(App);