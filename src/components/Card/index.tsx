import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface ICardProps {
  title?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Card: React.FC<ICardProps> = ({ title, icon: Icon, children }) => {
  return (
    <Container>
      <header>
        <p>{title}</p>
        {Icon && <Icon size={20} />}
      </header>
      {children}
    </Container>
  );
};

export default Card;
