import React from 'react';
import { connect } from 'react-redux';
import { toggleAliveCell } from './actions';
export function Cell(props) {
  return (
    <td
      onClick={() => {
        props.toggleAliveCell(props.x, props.y);
      }}
    >
      {props.isAlive ? '■' : '□'}
    </td>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    toggleAliveCell: (x, y) => {
      dispatch(toggleAliveCell(x, y));
    },
  };
}
export default connect(null, mapDispatchToProps)(Cell);
