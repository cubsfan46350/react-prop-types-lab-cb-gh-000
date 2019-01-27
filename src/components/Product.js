// Code Product Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div>
        <h1>name: {this.props.name}</h1>
        <h1>producer: {this.props.producer}</h1>
        <h1>hasWatermark: {this.props.hasWatermark}</h1>
        <h1>color: {this.props.color}</h1>
        <h1>weight: {this.props.weight}</h1>
      </div>
      );
  }
}

Product.PropTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']),
  weight: const weightFunction = 
}