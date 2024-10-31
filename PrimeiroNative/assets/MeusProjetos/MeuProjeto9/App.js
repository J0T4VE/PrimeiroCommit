import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarParOuImpar = () => {
    const num = parseInt(numero);
    if (isNaN(num)) {
      setResultado('Por favor, insira um número válido.');
    } else {
      setResultado(num % 2 === 0 ? 'O número é par.' : 'O número é ímpar.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Digite um número:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={numero}
        onChangeText={setNumero}
      />
      <Button title="Verificar" onPress={verificarParOuImpar} />
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
