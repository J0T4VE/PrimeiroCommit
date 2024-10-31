import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.contador}>{contador}</Text>

      <View style={styles.botoes}>
        <Pressable onPress={() => setContador(contador + 1)}>
          <Text style={styles.botao}>+</Text>
        </Pressable>

        <Pressable onPress={() => setContador(contador - 1)}>
          <Text style={styles.botao}>-</Text>
        </Pressable>
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
  contador: {
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
    margin: 10,
  },
});
