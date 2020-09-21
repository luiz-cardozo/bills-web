import React, { useState, useRef } from 'react';
import { useOnClickOutside } from '../../../hooks/useOnClickOutside';

import Burger from '../../../components/Burger';
import Menu from '../../../components/Menu';

import { Container } from './styles';

const Default: React.FC = ({ children }) => {
  const [open, setOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);
  const close = (): void => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <Container>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} onSelectPage={close} />
      </div>
      {children}
    </Container>
  );
};

export default Default;
