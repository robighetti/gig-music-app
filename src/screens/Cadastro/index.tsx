import React from 'react';
import { Text, View } from 'react-native';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Form/Button';

import { Form, Title } from '../Login/styles';

import { Container } from './styles';

const Cadastro: React.FC = () => {
  return (
    <Container>
      <Form>
        <Title>Atualização Cadastral</Title>

        <Input
          autoCapitalize="words"
          icon="user"
          placeholder="Nome Banda"
          returnKeyType="next"
        />

        <Input
          icon="music"
          placeholder="Estilo Musical"
          returnKeyType="next"
        />

        <Input
          icon="search"
          placeholder="Localizacao de Atuação"
          returnKeyType="next"
        />

        <Input
          icon="phone"
          placeholder="Contato celular (WhatsApp)"
          returnKeyType="next"
        />

        <Input
          secureTextEntry
          textContentType="newPassword"
          icon="lock"
          placeholder="Senha"
          returnKeyType="send"
        />
        <Button title="Cadastrar" onPress={() => {}} />
      </Form>
    </Container>
  );
};

export { Cadastro };
