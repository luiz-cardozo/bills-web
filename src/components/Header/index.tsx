import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
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

        <button type="button">
          <FiMenu size={20} />
        </button>
      </nav>
    </Container>
  );
};

export default Header;
