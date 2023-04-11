import React, { useState, useCallback, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, FlatList, Modal, TextInput } from "react-native";

import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AnimatedBtn = Animatable.createAnimatableComponent(TouchableOpacity)

export default function Digitar(){
  const [task, setTask] = useState([ ]);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    async function loadTasks() {
      const taskStorage =  await AsyncStorage.getItem('@task');
      if(taskStorage) {
        setTask(JSON.parse(taskStorage));
      }
    }
    loadTasks();
  }, []);

  useEffect(() => {
    async function saveTasks() {
      await AsyncStorage.setItem('@task', JSON.stringify(task));
    }
    saveTasks();
  }, [task]);


  function botaoCadastrar() {
    if(input === '') return alert('Digite o código');

  }

  return(
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#e76041" barStyle="light-content" />

      <View style={styles.container}>
        <Text style={styles.titulo}>Digite o Código de Ativação</Text>
      </View>
      <SafeAreaView style={styles.modal}>

          <Animatable.View style={styles.modalInput} animation="fadeInUp" useNativeDriver>
            <TextInput
            multiline={true}
            placeholderTextColor='#747474'
            autoCorrect={false}
            placeholder="Digite o Código da ativação"
            style={styles.input}
            value={input}
            onChangeText={(texto) => setInput(texto) }
            />

              <TouchableOpacity style={styles.botaoCadastrar} onPress={botaoCadastrar}>
                <Text style={styles.textCadastrar}>Ativar</Text>
              </TouchableOpacity >

          </Animatable.View>
        </SafeAreaView>






    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#e76041'
  },
  titulo:{
    marginTop: 200,

    fontSize: 30,
    textAlign:'center',
    color: '#fff'
  },

  modal:{

    flex:1,
    backgroundColor: '#e76041',
  },
  modalHeader:{
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalTitulo: {
    marginLeft: 15,
    fontSize: 25,
    color:'#fff'

  },

  input:{
    fontSize: 20,
    marginLeft:50,
    marginRight: 50,
    marginTop: 5,
    backgroundColor: '#fff',
    padding: 3,
    height: 40,

    color: '#000',
    borderRadius: 5,
  },
  botaoCadastrar:{
    backgroundColor: '#fff',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 100,
    marginRight: 100,
    height:40,
    borderRadius: 5,
  },
  textCadastrar:{
    fontSize: 20,
  }
})
