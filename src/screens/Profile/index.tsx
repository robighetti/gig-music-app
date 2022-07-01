import React from 'react';
import { Text } from 'react-native';
import { Button } from '../../components/Form/Button';
import { Fields,Image, Form, Title } from '../Login/styles';
import seuRestaurante from '../../assets/SeuRestaurante.png';
import { Container } from './styles';
import { ButtonSair } from '../../components/Form/ButtonSair';

const Profile: React.FC = () => {
  return (    
    <Container> 
      
      <Image source={seuRestaurante} />
      <Title>Bem vindo, XXXXXXXXX</Title>           
      <Form>        
        <Fields>        
          <Button title="Dashboard" onPress={""}/>
          <Button title="Reservas" onPress={""}/>
          <Button title="Agenda" onPress={""}/>
          <ButtonSair id="sair" title="Sair" onPress={""}/>
        </Fields>
       </Form>      
    </Container>
  );
};

export { Profile };
