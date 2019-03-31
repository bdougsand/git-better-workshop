import React from 'react';

export default function GovernmentSizeChooser(props) {
  const { sizes, onSelectSize } = props;
  const defaultSize = props.defaultSize || sizes[0];
  const onChange = (event) => onSelectSize(event.target.value);
  return sizes.map(size => (
    <label style={{ textTransform: 'capitalize' }}>
      <input
        type="radio"
        name="size"
        defaultChecked={size === defaultSize}
        value={size}
        onChange={onChange}
      />
      {size}
    </label>
  ));
}
