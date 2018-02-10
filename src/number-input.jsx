import React from 'react';

export default function NumberInput(props) {
  return (
    <div>
      <input
        type="number"
        name="width"
        id="width"
        value={props.value}
        onChange={e => {
          props.onBlur(Number(e.target.value));
        }}
      />
    </div>
  );
}
