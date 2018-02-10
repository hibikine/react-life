import React from 'react';
import { connect } from 'react-redux';
import Board from './board';
import StatusButton from './status-button';
import ResetButton from './reset-button';
import MapSizeInput from './map-size-input';

export function App(props) {
  return (
    <div>
      <Board rows={props.rows} />
      <StatusButton value={props.status} />
      <ResetButton />
      <MapSizeInput width={props.size.width} height={props.size.height} />
    </div>
  );
}
function mapStateToProps(state) {
  return { ...state };
}
export default connect(mapStateToProps)(App);
