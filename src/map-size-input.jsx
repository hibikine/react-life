import React from 'react';
import { connect } from 'react-redux';
import { setSize } from './actions';
import NumberInput from './number-input';
export function MapSizeInput(props) {
  return (
    <div>
      <NumberInput
        value={props.width}
        onBlur={width => {
          props.setSize(width, props.height);
        }}
      />
      <NumberInput
        value={props.height}
        onBlur={height => {
          props.setSize(props.width, height);
        }}
      />
    </div>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    setSize: (width, height) => {
      dispatch(setSize(width, height));
    },
  };
}

export default connect(null, mapDispatchToProps)(MapSizeInput);
