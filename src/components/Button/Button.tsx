import React, { useCallback, useState } from 'react';
import './Button.css';

interface ButtonDefaultType {
  name: string;
  onClick: () => void;
}

const Button = ({ name, onClick }: ButtonDefaultType) => {
  return (
    <button className="button" type="button" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
