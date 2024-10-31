import React from 'react';
import { Text, View } from 'react-native';

const getHoraAtual = () => {
  const dataAtual = new Date();
  const horas = dataAtual.getHours().toString().padStart(2, '0');
  const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
  return `${horas}:${minutos}`;
};

export default function App() {
  const nomeCompleto = 'João Fonariari'; 
  const horaAtual = getHoraAtual();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Olá, {nomeCompleto}! Agora são {horaAtual}</Text>
    </View>
  );
}
