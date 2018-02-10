import React from 'react';
import { connect } from 'react-redux';
import { setGameStatus } from './actions';
import { STATUS_STOP } from './reducer';
export class StatusButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }
  render() {
    return (
      <button
        onClick={() => {
          this.setState({ value: !this.state.value });
          this.props.setGameStatus(this.state.value);
        }}
      >
        {this.state.value ? 'Start' : 'Stop'}
      </button>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    setGameStatus: value => {
      dispatch(setGameStatus(value));
    },
  };
}
export default connect(null, mapDispatchToProps)(StatusButton);
