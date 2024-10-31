import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [dataNascimento, setDataNascimento] = useState('');
  const [horaNascimento, setHoraNascimento] = useState('');
  const [resultado, setResultado] = useState('');

  function calcularIdade() {
    const [ano, mes, dia] = dataNascimento.split('-').map(Number);
    const [hora, minuto] = horaNascimento.split(':').map(Number);
    const dataNascimentoCompleta = new Date(ano, mes - 1, dia, hora, minuto);
    const agora = new Date();

    let anos = agora.getFullYear() - dataNascimentoCompleta.getFullYear();
    let meses = agora.getMonth() - dataNascimentoCompleta.getMonth();
    let dias = agora.getDate() - dataNascimentoCompleta.getDate();
    let horas = agora.getHours() - dataNascimentoCompleta.getHours();
    let minutos = agora.getMinutes() - dataNascimentoCompleta.getMinutes();

    if (minutos < 0) {
      minutos += 60;
      horas--;
    }
    if (horas < 0) {
      horas += 24;
      dias--;
    }
    if (dias < 0) {
      dias += new Date(ano, mes, 0).getDate();
      meses--;
    }
    if (meses < 0) {
      meses += 12;
      anos--;
    }

    setResultado(`${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas e ${minutos} minutos`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcular Idade</Text>
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (AAAA-MM-DD)"
        value={dataNascimento}
        onChangeText={setDataNascimento}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Hora de Nascimento (HH:MM)"
        value={horaNascimento}
        onChangeText={setHoraNascimento}
        keyboardType="numeric"
      />
      <Button title="Calcular Idade" onPress={calcularIdade} />
      {resultado ? <Text style={styles.resultado}>Idade: {resultado}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultado: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
