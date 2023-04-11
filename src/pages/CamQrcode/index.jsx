import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TextInput, Image, TouchableOpacity, Modal} from 'react-native';
import { ModalEstudo } from '../../views/ModalEstudo';
import { useNavigation } from '@react-navigation/native';


export default function Qrcode() {
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


  return (
    <SafeAreaView style={styles.geral}>
      <View style={styles.divLogo}>
        <Image
          style={styles.logo}
          source={require('../assets/img/logo/logo.png')}
        />
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
  text: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff'
  },
  textInput: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 40,

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
    height: 50,
    width: 220,
    borderRadius: 20,
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
    height: 50,
    width: 220,
    borderRadius: 20,
  },

  botaoFinalizar: {
    backgroundColor: '#008000',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 220,
    borderRadius: 20,
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
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold'
  },
  textFinalizar: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold'
  },

  textSolicitar: {
    fontSize: 20,
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
