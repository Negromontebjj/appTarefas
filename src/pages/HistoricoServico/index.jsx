import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableOpacity, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons, Fontisto, AntDesign } from '@expo/vector-icons';


export default function HistorioServico({route}) {
  const navigation = useNavigation();

    return (
    <KeyboardAvoidingView style={styles.container}>
      <Entypo style={styles.info} name="info-with-circle" size={45} color="#fff" />
      <View style={styles.header}>
        <Text style={styles.informacoesFunc}>Olá :{route.params?.nome}</Text>
        <Text style={styles.informacoesFunc}>Email :{route.params?.email}</Text>
        <Text style={styles.informacoesFunc}>Nº Celular :{route.params?.celular}</Text>
      </View>

      <View style={styles.Rel}>
        <Text style={styles.textRelatorio}>Histórico de Serviço:</Text>
      </View>

      <View style={styles.servicos}>
        <View style={styles.Rel1}>
          <Text style={styles.Relatorio}>Total de Serviços executados!</Text>
          <AntDesign name="arrowright" size={24} color="black" />
        </View>
        <View style={styles.empresa}>
          <Text style={styles.informacoes}>{route.params?.qtdservico}</Text>
        </View>
      </View>

      <View style={styles.botoes}>
          <View >
            <TouchableOpacity style={styles.fecharInfo} onPress={() => navigation.navigate('MaisInfoHisto')}>
              <MaterialCommunityIcons name="card-account-details" size={35} color="#fff" />
              <Text style={styles.textMaisInfo}>Mais Info...</Text>
            </TouchableOpacity>
          </View>
          <View >
            <TouchableOpacity style={styles.fechar} onPress={() => navigation.navigate('Home')}>
              <Fontisto name="close" size={35} color="#fff" />
              <Text style={styles.textFechar}>Fechar</Text>
            </TouchableOpacity>
            </View>
      </View>

    </KeyboardAvoidingView>


  )

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191970',

  },
  servicos: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  botoes:{
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',

  },
  textFechar:{
    color: '#fff',
    fontSize: 16,
    marginTop: 6,
    fontWeight: 'bold'
  },

  textMaisInfo:{
    color: '#fff',
    fontSize: 14,
    marginTop: 5,
    fontWeight: 'bold'
  },
  fecharInfo:{
    color: '#fff',
    backgroundColor: '#008000',
    marginTop: 20,
    height: 100,
    width: 100,
    alignItems: 'center',
    borderRadius: 30,
    padding: 10,
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

  fechar: {

    color: '#fff',
    backgroundColor: '#800000',
    marginTop: 20,
    height: 100,
    width: 100,
    alignItems: 'center',
    borderRadius: 30,
    padding: 10,
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
  textfinalizar: {
    marginTop: 20,
    fontSize: 22,
    color: '#fff',

  },

  Info: {

    marginTop: 10,
    backgroundColor: '#e25b1e',
    height: 100,
    width: 150,
    alignItems: 'center',
    borderRadius: 10,

    borderWidth: 2,
    borderColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 3,
    shadowOpacity: 1,
    shadowRadius: 6,
  },



  textRelatorio: {

    fontSize: 15,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    fontWeight: 'bold',


  },
  Rel: {

    fontSize: 18,
    color: '#fff',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4220a2',
    borderRadius: 20,
    marginTop: 30,
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
  Rel1: {
    flexDirection: 'row',
    fontSize: 20,
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    width: 250,
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

  informacoes: {
    borderRadius: 10,
    backgroundColor: '#e25b1e',
    textAlign: 'center',
    alignContent: 'center',
    fontSize: 20,
    marginTop: 20,
    color: '#fff',
    fontWeight: 'bold',
    width: 200,
    height: 30
  },

  informacoesFunc: {
    paddingLeft: 20,
    fontSize: 14,
    marginTop: 3,
    color: '#000'

  },
  Relatorio: {
    fontSize: 16,
    color: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',



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
  info:{

    borderRadius: 20,
    marginLeft: 25,
    marginTop: 10,

  },



})
