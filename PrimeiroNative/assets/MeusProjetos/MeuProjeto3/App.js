import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const [corSelecionada, setCorSelecionada] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Você apertou: {corSelecionada}</Text>

      <Button
        title="Vermelho"
        onPress={() => setCorSelecionada('Vermelho')}
        color="red"
      />
      <Button
        title="Verde"
        onPress={() => setCorSelecionada('Verde')}
        color="green"
      />
      <Button
        title="Azul"
        onPress={() => setCorSelecionada('Azul')}
        color="blue"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
});
