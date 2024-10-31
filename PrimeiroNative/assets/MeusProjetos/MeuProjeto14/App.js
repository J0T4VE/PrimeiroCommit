import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState('');

  const calcular = (operacao) => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);
    let res;

    if (isNaN(numero1) || isNaN(numero2)) {
      setResultado('Por favor, insira números válidos.');
      return;
    }

    switch (operacao) {
      case 'adição':
        res = numero1 + numero2;
        break;
      case 'subtração':
        res = numero1 - numero2;
        break;
      case 'multiplicação':
        res = numero1 * numero2;
        break;
      case 'divisão':
        res = numero2 !== 0 ? numero1 / numero2 : 'Divisão por zero!';
        break;
      default:
        break;
    }

    setResultado(`Resultado: ${res}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>
      <TextInput
        style={styles.input}
        placeholder="Número 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />
      <TextInput
        style={styles.input}
        placeholder="Número 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />
      <View style={styles.botoes}>
        <Button title="+" onPress={() => calcular('adição')} />
        <Button title="-" onPress={() => calcular('subtração')} />
        <Button title="*" onPress={() => calcular('multiplicação')} />
        <Button title="/" onPress={() => calcular('divisão')} />
      </View>
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
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});
