import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState('');

  const verificarPrimo = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const verificarNumeroPrimo = () => {
    const num = parseInt(numero);
    if (isNaN(num)) {
      setResultado('Por favor, insira um número válido.');
    } else {
      const ehPrimo = verificarPrimo(num);
      setResultado(ehPrimo ? 'O número é primo.' : 'O número não é primo.');
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
      <Button title="Verificar" onPress={verificarNumeroPrimo} />
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
