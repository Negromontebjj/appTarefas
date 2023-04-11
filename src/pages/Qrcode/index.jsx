import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Modal} from 'react-native';

import { ModalEstudo } from '../../views/ModalEstudo';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Fontisto,MaterialIcons } from '@expo/vector-icons';


export default function Qrcode(props) {
  const [inputText, setInputText] = useState('');
  const [pagModal, setPagModal] = useState(false);
  const navigation = useNavigation();


  const Relatorio = () => {
    navigation.navigate('Relatorio',    {nome: '  Marcelo',
                                        email: '  marcelo@gmail.com',
                                        solicitadopor: 'Empresa ou Pessoa Fisica (Ex: Coca-Cola ou Eduardo)',
                                        serviço: 'Desinfecção do Ambiente',
                                        hora: '9:47h às 12h',
                                        data: '02/04/2023',
                                        celular: '  81 9 9999-9999'})
  }

  function Mostrar(){
    return alert('Ativou o Robô! Obrigado')
    
  }

  return (
    <SafeAreaView style={styles.geral}>

      <MaterialCommunityIcons name="key-wireless" size={90} color="#fff" />

      <View style={styles.container}>
        <Text style={styles.text}>Insira a chave de ativação</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(inputText) => setInputText(inputText)}
          value={inputText}
        />
        <TouchableOpacity style={styles.botaoAtivar}>
        <Fontisto name="checkbox-active" size={25} color="#fff" />
          <Text
            style={styles.textAtivar}
            onPress={() => Mostrar()}>Ativar o Serviço</Text>
        </TouchableOpacity>

        <View style={styles.FinEsoli}>
          <TouchableOpacity style={styles.botaoFinalizar} onPress={() => { setPagModal(true) }}>
          <MaterialIcons name="mobile-friendly" size={28} color="#fff" />
            <Text style={styles.textFinalizar}>Finalizar Serviço</Text>
          </TouchableOpacity>
          <Modal
            animationType="fade"
            transparent={true}
            visible={pagModal}
            onRequestClose={() => setPagModal(false)}
            style={styles.Modal}
          >
            <ModalEstudo
              handleClose={() => setPagModal(false)}
              handleSIM={() => Relatorio()}
              handleNAO={() => setPagModal(false)}
            />
          </Modal>

        <TouchableOpacity style={styles.botaoSolicitar}>
        <MaterialCommunityIcons name="email-multiple-outline" size={28} color="#fff" />
          <Text
            style={styles.textSolicitar}
            onPress={() => props.navigation.navigate('EnviarEmail')}>Solicitar a Ativação</Text>
        </TouchableOpacity>
        </View>
      </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    backgroundColor: '#191970',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 40,
  },

  FinEsoli:{
    flexDirection: 'row'
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff'
  },
  textInput: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 50,
    width: 250,
    marginLeft: 10,
    marginRight: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 30,
  },
  botaoAtivar: {
    backgroundColor: '#e76041',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 180,
    borderRadius: 50,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor:'#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 6,

  },

  botaoSolicitar: {
    backgroundColor: '#7B68EE',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 180,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor:'#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 6,

  },

  botaoFinalizar: {
    backgroundColor: '#008000',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 180,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor:'#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 6,


  },
  divLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAtivar: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },
  textFinalizar: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  },

  textSolicitar: {
    fontSize: 18,
    color: '#fff',
  },

  Modal: {
    backgroundColor: '#e76041',
    margin: 5,
    padding: 20,
    borderRadius: 20,
    elevation: 10,
  },

  textModal: {
    fontSize: 27,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textRelatorio: {
    color: '#fff',
    fontSize: 20
  }

});
