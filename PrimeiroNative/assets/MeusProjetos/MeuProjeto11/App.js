import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [texto, setTexto] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarPalindromo = () => {
    const textoLimpo = texto.replace(/[^A-Za-z0-9]/g, '').toLowerCase(); // Remove caracteres especiais e transforma em minúsculas
    const ehPalindromo = textoLimpo === textoLimpo.split('').reverse().join('');
    setResultado(ehPalindromo ? 'É um palíndromo!' : 'Não é um palíndromo.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Digite um texto:</Text>
      <TextInput
        style={styles.input}
        value={texto}
        onChangeText={setTexto}
      />
      <Button title="Verificar" onPress={verificarPalindromo} />
      {resultado !== '' && <Text style={styles.resultado}>{resultado}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});
