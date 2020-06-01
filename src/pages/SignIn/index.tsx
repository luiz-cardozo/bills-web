import React, { useRef, useCallback } from 'react';
import { FiDollarSign, FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import { ReactComponent as SignInBackGround } from '../../assets/signin.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, Lock } from './styles';

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null)
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().required('Campo obrigatório').email('Insira um endereço de e-mail válido'),
        password: Yup.string().required('Campo obrigatório')
      })
      await schema.validate(data, {
        abortEarly: false,
      });

    } catch (err) {
      
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      
    }
  },[])

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
  )
};
export default SignIn;
