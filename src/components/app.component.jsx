import React from 'react';
import PropTypes from 'prop-types';
import Main from '../components/main.component';

export default class App extends React.Component {
  
  componentDidMount() {
    this.props.onAppReady();
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}
