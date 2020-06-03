import React, { useRef, useCallback, useContext } from 'react';
import { FiDollarSign, FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import { AuthContext } from '../../hooks/auth';

import { ReactComponent as SignInBackGround } from '../../assets/signin.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, Lock } from './styles';
import { useToast } from '../../hooks/toast';

interface ISignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, signIn } = useContext(AuthContext);
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ISignInFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Campo obrigatório')
            .email('Insira um endereço de e-mail válido'),
          password: Yup.string().required('Campo obrigatório'),
        });
        await schema.validate(data, {
          abortEarly: false,
        });
        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }
      }

      addToast({
        type: 'error',
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
      });
    },
    [addToast, signIn],
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
          <a>Esqueci minha senha</a>
        </Form>
        <a>
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background>
        <SignInBackGround />
      </Background>
    </Container>
  );
};
export default SignIn;
