import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo.svg';
import { Container, Profile } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <img src={Logo} alt="Contas da casa" />
        <nav>
          <NavLink exact to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>

          <NavLink exact to="/transactions" activeClassName="active">
            Transações
          </NavLink>

          <NavLink exact to="/reports" activeClassName="active">
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
      </header>
    </Container>
  );
};

export default Header;
