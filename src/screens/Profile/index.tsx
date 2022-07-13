import React from 'react';
import { Text } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Fields,Image, Form, Title } from '../Login/styles';
import suaBanda from '../../assets/SuaBanda.png';
import { Container } from './styles';
import { ButtonSair } from '../../components/Form/ButtonSair';
import { Cadastro } from '../Cadastro';
import { Agenda } from '../Agenda';

const Profile: React.FC = () => {
  return (    
    <Container> 
      
      <Image source={suaBanda} />
      <Title>Bem vindo, Sepultura</Title>           
      <Form>        
        <Fields>        
          <Button title="Cadastro" onPress={() => {}}/>          
          <Button title="Agenda" onPress={() => {}}/>          
        </Fields>
       </Form>      
    </Container>
  );
};

export { Profile };
