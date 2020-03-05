import React from 'react';
import InputMask from 'react-input-mask'

export default function PhoneInput({ mask, ...rest }) {
  return (
    <InputMask {...rest} mask={mask} maskChar="" />
  );
}
