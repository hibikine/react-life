import React from 'react';
import { connect } from 'react-redux';
import { resetLife } from './actions';
function ResetButton(props) {
  return (
    <button
      onClick={() => {
        props.resetLife();
      }}
    >
      Reset
    </button>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    resetLife: () => dispatch(resetLife()),
  };
}
export default connect(null, mapDispatchToProps)(ResetButton);
