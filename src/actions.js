export const SET_SIZE = 'set_size';
export const ADD_ALIVE_CELL = 'add_alive_cell';
export const START_LIFE = 'start_life';
export const STOP_LIFE = 'stop_life';
export const TICK_LIFE = 'tick_life';
export const RESET_LIFE = 'reset_life';
export function tickLife() {
  return {
    type: TICK_LIFE,
  };
}
export function toggleAliveCell(x, y) {
  return {
    type: ADD_ALIVE_CELL,
    payload: {
      x,
      y,
    },
  };
}

export function setSize(width, height) {
  return {
    type: SET_SIZE,
    payload: {
      width,
      height,
    },
  };
}

export function setGameStatus(value) {
  if (value) {
    return startLife();
  } else {
    return stopLife();
  }
}

function startLife() {
  return {
    type: START_LIFE,
  };
}

function stopLife() {
  return {
    type: STOP_LIFE,
  };
}

export function resetLife() {
  return {
    type: RESET_LIFE,
  };
}
