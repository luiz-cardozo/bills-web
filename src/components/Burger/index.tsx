import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  open: boolean;
  setOpen(open: boolean): void;
};

const Burger: React.FC<ButtonProps> = ({ open, setOpen }) => {
  return (
    <Container open={open} onClick={() => setOpen(!open)} type="button">
      <div />
      <div />
      <div />
    </Container>
  );
};

export default Burger;
