import React from 'react';
import { FiDollarSign, FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ReactComponent as SignInBackGround } from '../../assets/signin.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, Lock } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <Lock>
        <FiDollarSign />
      </Lock>
      <h1>Faça seu login</h1>
      <form>
        <Input name="email" type="text" placeholder="E-mail" icon={FiMail} />
        <Input
          name="password"
          type="passowrd"
          placeholder="Senha"
          icon={FiLock}
        />
        <Button type="submit">Entrar</Button>
        <Link to="/">Esqueci minha senha</Link>
      </form>
      <Link to="/">
        <FiLogIn />
        Criar conta
      </Link>
    </Content>
    <Background>
      <SignInBackGround />
    </Background>
  </Container>
);
export default SignIn;
