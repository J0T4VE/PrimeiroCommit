import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

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

       <Image source={require('./path/to/your/image.png')} style={styles.imagem} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  texto: {
    fontSize: 24,
    marginBottom: 20,
  },
});
