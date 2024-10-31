import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.texto}>
        Olá, {nomeCompleto}! Agora são {horaAtual}.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  texto: {
    fontSize: 24,
    color: '#333',
  },
});

