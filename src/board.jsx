import React from 'react';
import Row from './row';

export default function Board(props) {
  return (
    <div>
      <table>
        <tbody>
          {props.rows.map((v, i) => (
            <Row key={'row-' + i.toString()} cells={v} y={i} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
