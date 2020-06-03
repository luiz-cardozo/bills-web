import React, { useCallback, useRef } from 'react';
import {
  FiDollarSign,
  FiLock,
  FiMail,
  FiArrowLeft,
  FiUser,
} from 'react-icons/fi';
import { FormHandles } from '@unform/core'
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { ReactComponent as SignInBackGround } from '../../assets/signin.svg';

import { Container, Content, Background, Lock } from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        email: Yup.string().required('Campo obrigatório').email('Insira um endereço de e-mail válido'),
        password: Yup.string().min(6, 'Mínimo de 6 dígitos')
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
        <h1>Faça seu cadastro</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Nome" icon={FiUser} />
          <Input name="email" type="text" placeholder="E-mail" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a>
          <FiArrowLeft />
          Voltar para login
        </a>
      </Content>
      <Background>
        <SignInBackGround />
      </Background>
    </Container>
  );
};
export default SignUp;
