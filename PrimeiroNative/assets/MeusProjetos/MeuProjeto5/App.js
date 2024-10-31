import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textoContador}>{contador}</Text>
      
      <View style={styles.botoes}>
        <TouchableOpacity onPress={() => setContador(contador + 1)}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setContador(contador - 1)}>
          <Text style={styles.botao}>-</Text>
        </TouchableOpacity>
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
  textoContador: {
    fontSize: 50,
    marginBottom: 20,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
  },
  botao: {
    fontSize: 40,
    padding: 10,
    backgroundColor: '#ddd',
    textAlign: 'center',
    borderRadius: 5,
  },
});
