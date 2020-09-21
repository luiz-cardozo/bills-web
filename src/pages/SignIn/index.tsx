import React, { useRef, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { FiDollarSign, FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import getValidationErrors from '../../utils/getValidationErrors';
import { ReactComponent as SignInBackGround } from '../../assets/signin.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, Lock } from './styles';

interface ISignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string().required('Digite um e-mail válido'),
          password: Yup.string().required('Digite sua senha'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn({
          email: data.email,
          password: data.password,
        });
        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro no login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <Content>
        <Lock>
          <FiDollarSign />
        </Lock>
        <h1>Faça seu login</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" type="text" placeholder="E-mail" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Entrar</Button>
          <Link to="/">Esqueci minha senha</Link>
        </Form>
        <Link to="/signup">
          <FiLogIn />
          Criar conta
        </Link>
      </Content>
      <Background>
        <SignInBackGround />
      </Background>
    </Container>
  );
};
export default SignIn;
