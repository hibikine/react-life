import React from 'react';
import Cell from './cell';

export default function Row(props) {
  return (
    <tr>
      {props.cells.map((v, i) => (
        <Cell key={'cell-' + i.toString()} isAlive={v} y={props.y} x={i} />
      ))}
    </tr>
  );
}
