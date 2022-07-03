import React from 'react';
import { Button, Text, View } from 'react-native';
import { Input } from '../../components/Form/Input';
import { Form, Title } from '../Login/styles';

import { Container } from './styles';

const Cadastro: React.FC = () => {
  return (
    <Container>
        <Form >
        <Title>Cadastro</Title>            
            
            <Input            
            autoCapitalize="words"            
            icon="user"
            placeholder="Nome"
            returnKeyType="next"                
            />

            <Input                                    
            icon='direction'            
            placeholder="Localizacao de Atuação"
            returnKeyType="next"                
            />

            <Input                
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"            
            icon="mail"
            placeholder="E-mail"
            returnKeyType="next"                
            />
            
            <Input                                    
            icon='phone'            
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
            <Button title="Cadastrar" onPress={""}>
            </Button>
        </Form>
    </Container>
  );
};

export { Cadastro };