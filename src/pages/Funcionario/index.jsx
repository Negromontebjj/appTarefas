import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo, FontAwesome, AntDesign } from '@expo/vector-icons';



export default function Funcionario({route}) {
  const navigation = useNavigation();

  const HistoricoServico = () => {
    navigation.navigate('HistoricoServico',  {nome: '  Marcelo Pontes!',
                                              email: '  marcelopostes@gmail.com',
                                              qtdservico: '16',
                                              serviço: 'Desinfecção do Ambiente',
                                              hora: '9:47h às 12h',
                                              data: '02/04/2023',
                                              celular: '  81 9 9999-9999'})
  }


  return (

    <KeyboardAvoidingView style={styles.container}>
      <Entypo style={styles.info} name="info-with-circle" size={45} color="#fff" />
      <View style={styles.header}>

        <Text style={styles.informacoesFunc}>Olá :{route.params?.nome}</Text>
        <Text style={styles.informacoesFunc}>Email :{route.params?.email}</Text>
        <Text style={styles.informacoesFunc}>Nº Celular :{route.params?.celular}</Text>
      </View>
      <View style={styles.containerBox}>
        <TouchableOpacity style={styles.boxqrcode} onPress={() => navigation.navigate('Qrcode')}>
          <View style={styles.imgqrcode}>
            <Entypo name="key" size={30} color="#000" />
          </View>
          <View>
            <Text style={styles.textqrcode} > Ativação por Código</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxqrcode} onPress={() => navigation.navigate('Qrcode')}>
          <View style={styles.imgqrcode}>
            <AntDesign name="qrcode" size={30} color="black" />
          </View>
          <View>
            <Text style={styles.textqrcode} > Ativação por Qrcode</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxqrcode} onPress={() => navigation.navigate('EnviarEmail')}>
          <View style={styles.imgqrcode}>
            <Entypo name="mail" size={30} color="#000" />
          </View>
          <View>
            <Text style={styles.textqrcode} > Solicitar Chave de Ativação </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.boxqrcode} onPress={() => navigation.navigate(HistoricoServico())}>
          <View style={styles.imgqrcode}>
            <FontAwesome name="history" size={30} color="black" />
          </View>
          <View>
            <Text style={styles.textqrcode} > Histórico de Serviço </Text>
          </View>
        </TouchableOpacity>

      </View>
      <KeyboardAvoidingView style={styles.container1}>
        <View style={styles.divLogo}>
          <Image
              style={styles.logo}
              source={require("../assets/img/logo/logo.png")}
            />
        </View>
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',
  },
  container1: {
    flex: 1,
    backgroundColor: '#191970',
  },
  logo: {
    width: 250,
    height: 250,
  },
  divLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },



  containerBox: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',

  },

  boxqrcode: {

    height: 90,
    width: 90,
    backgroundColor: '#fff',
    borderColor: '#000',
    borderWidth: 1,
    margin: 5,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 6,
  },

  imgqrcode: {
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10
  },

  textqrcode: {
    marginTop: 10,
    fontSize: 12,
    color: '#000',
    textAlign: 'center',
  },

  box1: {
    height: 110,
    width: 110,
    backgroundColor: '#000',
    borderColor: '#000',
    borderWidth: 5,
    margin: 40,
    borderRadius: 15,
  },

  icone: {
    width: '15%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  GerarPdf: {
    flexDirection: 'row',
    justifyContent: 'center'

  },
  info:{

    borderRadius: 20,
    marginLeft: 25,
    marginTop: 10,

  },

  header:{
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 6,
    shadowOpacity: 1,
    shadowRadius: 6,

  },

  informacoesFunc: {
    color: '#000',
    fontSize: 22,
    margin: 5
  },


})
