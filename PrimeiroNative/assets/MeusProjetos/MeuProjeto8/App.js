import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  const filme = {
    titulo: 'O Grande Filme',
    cinema: 'CineXP',
    horario: '18:00',
    imagem: require('./assets/filme.jpg'), 
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={filme.imagem} style={styles.imagem} />
        <Text style={styles.titulo}>{filme.titulo}</Text>
        <Text style={styles.detalhes}>Cinema: {filme.cinema}</Text>
        <Text style={styles.detalhes}>Horário: {filme.horario}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  card: {
    width: 250,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  imagem: {
    width: 200,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detalhes: {
    fontSize: 16,
    color: '#666',
  },
});

