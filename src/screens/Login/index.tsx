import React from 'react';
import { Alert } from 'react-native';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '../../hooks/auth';

import { InputForm } from '../../components/Form/InputForm';
import { Button } from '../../components/Form/Button';

import logo from '../../assets/logo.png';

import { Container, Image, Title, Form, Fields } from './styles';

interface FormData {
  username: string;
  password: string;
}

const schema = Yup.object().shape({
  username: Yup.string().required('Usuário é obrigatório'),
  password: Yup.string().required('Senha é obrigatória'),
});

const Login: React.FC = () => {
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = async (form: FormData) => {
    try {
      await signIn({
        username: form.username,
        password: form.password,
      });
    } catch (error: any) {
      return Alert.alert(error.message);
    }
  };

  return (
    <Container>
      <Image source={logo} />

      <Title>Faça seu Login</Title>
      <Form>
        <Fields>
          <InputForm
            name="username"
            control={control}
            placeholder="Código do Usuário"
            autoCapitalize="none"
            autoCorrect={false}
            icon="user"
            error={errors.username && errors.username.message}
          />

          <InputForm
            name="password"
            control={control}
            placeholder="Senha"
            secureTextEntry
            icon="lock"
            error={errors.password && errors.password.message}
          />
        </Fields>

        <Button title="Entrar" onPress={handleSubmit(handleLogin)} />
      </Form>
    </Container>
  );
};

export { Login };
