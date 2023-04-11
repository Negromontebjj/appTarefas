import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Relatorio({route}) {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [solicitado, setSolicitado] = useState('');
  const [servico, setServico] = useState('');
  const [horario, setHorario] = useState('');
  const [data, setData] = useState('');


  return (
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.empresa}>
          <Text style={styles.informacoesFunc}>Serviço executado por :{route.params?.nome}</Text>
          <Text style={styles.informacoesFunc}>Email funcionário :{route.params?.email}</Text>
          <Text style={styles.informacoesFunc}>Nº Celular do funcionário :{route.params?.celular}</Text>
        </View>
        <View style={styles.Rel}>
          <Text style={styles.textRelatorio}>RELATÓRIO DE SERVIÇO:</Text>
        </View>

        <View style={styles.Rel1}>
          <Text style={styles.Relatorio}>Solicitado Por:</Text>
        </View>
        <View style={styles.empresa}>
          <Text style={styles.informacoes}>{route.params?.solicitadopor}</Text>
        </View>
        <View style={styles.Rel1}>
          <Text style={styles.Relatorio}>Serviço Executado:</Text>
        </View>
        <View style={styles.empresa}>
          <Text style={styles.informacoes}>{route.params?.serviço}</Text>
        </View>
        <View style={styles.Rel1}>
          <Text style={styles.Relatorio}>Tempo de Serviço:</Text>
        </View>
        <View style={styles.empresa}>
          <Text style={styles.informacoes}>{route.params?.hora}</Text>
        </View>
        <View style={styles.Rel1}>
          <Text style={styles.Relatorio}>Data do Serviço:</Text>
        </View>
        <View style={styles.empresa}>
          <Text style={styles.informacoes}>{route.params?.data}</Text>
        </View>
        <View style={styles.botoes}>
          <TouchableOpacity style={styles.finalizar} onPress={() => navigation.navigate('Qrcode')}>
              <Text style={styles.textfinalizar}>Finalizar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.gerarpdf}>
            <Entypo name="download" size={30} color="'#fff'" />
            <Text style={styles.downloadPDF}> Download PDF</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>


  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',

  },

  textRelatorio: {

    fontSize: 20,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
    fontWeight: 'bold'

  },
  Rel: {

    fontSize: 20,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e76041',
    borderRadius: 10,
    marginTop: 10,
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
  Rel1: {

    fontSize: 20,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
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

  informacoes:{
    paddingLeft: 20,
    fontSize: 20,
    marginTop: 3,
    color: '#fff'
  },

  informacoesFunc:{
    paddingLeft: 20,
    fontSize: 14,
    marginTop: 3,
    color: '#fff'

  },
  Relatorio:{
    fontSize: 22,
    color: '#000',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold'

  },
  finalizar:{

    color: '#fff',
    backgroundColor: '#008000',
    marginTop: 40,
    height: 100,
    width: 100,
    alignItems: 'center',
    borderRadius:30,
    padding: 10,
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
  textfinalizar:{
    marginTop: 20,
    fontSize: 22,
    color: '#fff',

  },
  gerarpdf:{

    alignItems: 'center',
    textAlign: 'center',
    marginTop: 40,

    color: '#fff',
    height: 100,
    width: 100,
    fontWeight: 'bold',
    backgroundColor: '#e76041',



    borderRadius:30,
    padding: 10,
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
  downloadPDF:{

    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botoes:{

    flexDirection:'row',
    margin: 10,
    justifyContent: 'center',
    paddingRight: 10
  }

})
