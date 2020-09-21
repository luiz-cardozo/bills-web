import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import { Container, Profile } from './styles';

interface IMenuProps {
  open: boolean;
  onSelectPage(): void;
}

const Menu: React.FC<IMenuProps> = ({ open, onSelectPage }) => {
  return (
    <Container open={open}>
      <img src={Logo} alt="Contas da casa" />
      <nav>
        <NavLink
          exact
          to="/dashboard"
          activeClassName="active"
          onClick={() => onSelectPage()}
        >
          Dashboard
        </NavLink>
        <NavLink
          exact
          to="/transactions"
          activeClassName="active"
          onClick={() => onSelectPage()}
        >
          Transações
        </NavLink>
        <NavLink
          exact
          to="/reports"
          activeClassName="active"
          onClick={() => onSelectPage()}
        >
          Relatórios
        </NavLink>
      </nav>
      <Profile>
        <img
          src="https://api.adorable.io/avatars/80/abott@adorable.png"
          alt="Luiz"
        />
        <div>
          <strong>Bem-vindo,</strong>
          <span>Luiz Fernando Cardozo</span>
        </div>
      </Profile>
    </Container>
  );
};

export default Menu;
