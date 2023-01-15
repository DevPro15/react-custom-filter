import React from 'react';

function Dropdown({ name, title, id, onChange }) {
  return (
    <select
      name={name}
      id={id}
      style={{
        border: '1px solid black',
        width: '100%',
        padding: '10px',
      }}
      onChange={onChange}
      style={{ margin: '0px 2px', width: '40%' }}
    >
      {title?.map((rate) => (
        <option key={rate.Rating} value={rate.Rating}>
          {rate.Stars}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
