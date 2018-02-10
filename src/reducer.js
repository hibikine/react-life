import {
  SET_SIZE,
  START_LIFE,
  TICK_LIFE,
  ADD_ALIVE_CELL,
  STOP_LIFE,
  RESET_LIFE,
} from './actions';

export const STATUS_START = 'status_start';
export const STATUS_STOP = 'status_stop';

const defaultWidth = 10;
const defaultHeight = 10;
const initialState = {
  rows: initializeRows(defaultWidth, defaultHeight),
  size: {
    width: defaultWidth,
    height: defaultHeight,
  },
  status: STOP_LIFE,
};

function initializeRows(width, height, base) {
  const array = new Array(height)
    .fill(0)
    .map(() => new Array(width).fill(0).map(() => false));
  if (base != null) {
    base.map((v, y) => {
      v.map((w, x) => {
        array[y][x] = w;
      });
    });
  }
  return array;
}

function getCell(rows, x, y) {
  if (x < 0) {
    return false;
  }
  if (x >= rows[0].length) {
    return false;
  }
  if (y < 0) {
    return false;
  }
  if (y >= rows.length) {
    return false;
  }
  return rows[y][x];
}

function sum(i, value) {
  if (value) {
    return i + 1;
  }
  return i;
}

function isAlive(rows, x, y) {
  const cellSum = countCells(rows, x, y);
  if (rows[y][x]) {
    if (cellSum > 4) {
      return false;
    }
    if (cellSum < 3) {
      return false;
    }
    return true;
  } else {
    if (cellSum === 3) {
      return true;
    }
    return false;
  }
}

function countCells(rows, x, y) {
  let count = 0;
  for (let i = -1; i < 2; i += 1) {
    for (let j = -1; j < 2; j += 1) {
      if (getCell(rows, x + i, y + j)) {
        count += 1;
      }
    }
  }
  return count;
}

export default function reducer(state = initialState, action) {
  if (state == null) {
    return state;
  }
  switch (action.type) {
    case SET_SIZE:
      return {
        ...state,
        rows: initializeRows(
          action.payload.width,
          action.payload.height,
          state.rows
        ),
        size: {
          width: action.payload.width,
          height: action.payload.height,
        },
      };
    case ADD_ALIVE_CELL:
      const rows = [...state.rows.map(r => [...r])];
      rows[action.payload.y][action.payload.x] = !rows[action.payload.y][
        action.payload.x
      ];
      return {
        ...state,
        rows,
      };
    case START_LIFE:
      return {
        ...state,
        status: STATUS_START,
      };
    case TICK_LIFE:
      return {
        ...state,
        rows: state.rows.map((row, y) =>
          row.map((v, x) => isAlive(state.rows, x, y))
        ),
      };
    case RESET_LIFE:
      return {
        ...state,
        rows: initializeRows(state.size.width, state.size.height),
      };
    case STOP_LIFE:
      return {
        ...state,
        status: STATUS_STOP,
      };
  }
  return state;
}
