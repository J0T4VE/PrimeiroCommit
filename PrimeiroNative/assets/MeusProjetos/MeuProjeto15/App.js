import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const perguntas = [
  {
    pergunta: 'Qual a capital da França?',
    opcoes: ['Berlim', 'Madri', 'Paris', 'Lisboa'],
    respostaCorreta: 2,
  },
  {
    pergunta: 'Qual é o maior planeta do sistema solar?',
    opcoes: ['Terra', 'Marte', 'Júpiter', 'Saturno'],
    respostaCorreta: 2,
  },
  {
    pergunta: 'Qual é o resultado de 2 + 2?',
    opcoes: ['3', '4', '5', '6'],
    respostaCorreta: 1,
  },
  {
    pergunta: 'Quem escreveu "Dom Casmurro"?',
    opcoes: ['Machado de Assis', 'José de Alencar', 'Clarice Lispector', 'Jorge Amado'],
    respostaCorreta: 0,
  },
  {
    pergunta: 'Qual o elemento químico com símbolo H?',
    opcoes: ['Hélio', 'Hidrogênio', 'Oxigênio', 'Nitrogênio'],
    respostaCorreta: 1,
  },
  {
    pergunta: 'Qual é o maior animal terrestre?',
    opcoes: ['Elefante', 'Girafa', 'Baleia', 'Rinoceronte'],
    respostaCorreta: 0,
  },
  {
    pergunta: 'Qual é a moeda do Japão?',
    opcoes: ['Yuan', 'Won', 'Dólar', 'Iene'],
    respostaCorreta: 3,
  },
  {
    pergunta: 'Quantos estados tem o Brasil?',
    opcoes: ['24', '25', '26', '27'],
    respostaCorreta: 3,
  },
  {
    pergunta: 'Qual é a capital da Espanha?',
    opcoes: ['Barcelona', 'Sevilha', 'Madrid', 'Valência'],
    respostaCorreta: 2,
  },
  {
    pergunta: 'Qual a fórmula da água?',
    opcoes: ['H2O', 'CO2', 'O2', 'H2'],
    respostaCorreta: 0,
  },
];

export default function App() {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [quizConcluido, setQuizConcluido] = useState(false);

  const responder = (indice) => {
    if (indice === perguntas[indicePergunta].respostaCorreta) {
      setPontuacao(pontuacao + 1);
    }

    const proximaPergunta = indicePergunta + 1;
    if (proximaPergunta < perguntas.length) {
      setIndicePergunta(proximaPergunta);
    } else {
      setQuizConcluido(true);
    }
  };

  const reiniciarQuiz = () => {
    setIndicePergunta(0);
    setPontuacao(0);
    setQuizConcluido(false);
  };

  return (
    <View style={styles.container}>
      {quizConcluido ? (
        <View style={styles.resultadoContainer}>
          <Text style={styles.resultado}>Sua pontuação: {pontuacao} de {perguntas.length}</Text>
          <Button title="Reiniciar Quiz" onPress={reiniciarQuiz} />
        </View>
      ) : (
        <View>
          <Text style={styles.pergunta}>{perguntas[indicePergunta].pergunta}</Text>
          {perguntas[indicePergunta].opcoes.map((opcao, index) => (
            <Button key={index} title={opcao} onPress={() => responder(index)} />
          ))}
        </View>
      )}
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
  pergunta: {
    fontSize: 24,
    marginBottom: 20,
  },
  resultadoContainer: {
    alignItems: 'center',
  },
  resultado: {
    fontSize: 24,
    marginBottom: 20,
  },
});
