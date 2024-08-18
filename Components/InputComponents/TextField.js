import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function TextField(props) {
  const {
    value: initialValue,
    validation,
    onChange,
    elementId,
    type,
    placeholder,
  } = props;

  const [value, setValue] = useState(initialValue);
  const showErrorMessages = useSelector((state) => state.dataStore.showErrorMessages);

  const checkValidation = () => {
    let errorMessage = "";
    if (validation && validation.required && value === "") {
      errorMessage = '*required!';
    } else if (validation && validation.maxLengthRequired && value.length > validation.maxLengthRequired) {
      errorMessage = `write up to ${validation.maxLengthRequired} characters`;
    } else if (validation && validation.checkType === 'email') {
      if (!/\S+@\S+\.\S+/.test(value)) {
        errorMessage = "Invalid Email address!";
      }
    }
    return errorMessage;
  };

  let errorMessage = checkValidation();

  useEffect(() => {
    if (validation && validation.required && value === "") {
      onChange(value, '*required!');
    }
  }, [validation, value, onChange]);

  useEffect(() => {
    let timerOutId;

    if (value !== initialValue && onChange) {
      timerOutId = setTimeout(() => {
        if (validation) {
          onChange(value, errorMessage);
        } else {
          onChange(value, "");
        }
      }, 500);
    }
    return () => {
      clearTimeout(timerOutId);
    };
  }, [value, initialValue, onChange, validation, errorMessage]);

  return (
    <div className='w-100 h-100 position-relative'>
      <div
        style={((value !== "" || showErrorMessages === true) && errorMessage !== "") ? 
          { display: 'block', position: 'absolute', bottom: -20, color: "rgb(247, 89, 89)" } : 
          { display: 'none' }
        }
      >
        {errorMessage}
      </div>
      <input
        className='input-style'
        id={elementId}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}

export default TextField;
