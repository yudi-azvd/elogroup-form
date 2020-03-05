import React from 'react';
import InputMask from 'react-input-mask'

export default function PhoneInput(props) {
  return (
    <InputMask {...props} mask="99 - 99999999" maskChar=" " />
  );
}
