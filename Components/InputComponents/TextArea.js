import React, { useState, useEffect } from 'react';

function TextArea(props) {
  const { value: initialValue, onChange, elementId, rows } = props;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    let timerOutId;

    if (value !== initialValue && onChange) {
      timerOutId = setTimeout(() => {
        onChange(value, "");
      }, 500);
    }
    return () => {
      clearTimeout(timerOutId);
    };
  }, [value, initialValue, onChange]);

  return (
    <div className='w-100 h-100 position-relative'>
      <textarea
        className={'input-style'}
        id={elementId}
        rows={rows}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></textarea>
    </div>
  );
}

export default TextArea;
