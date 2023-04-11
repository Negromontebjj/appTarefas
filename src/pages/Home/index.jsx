import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function Home(props) {

  return (
    <View style={styles.container} >
      <ImageBackground
        source={require('../assets/img/bg/bgEAI.png')}
        style={styles.imagemFundo}

      >
        <View style={styles.divLogo}>
          <Image
            style={styles.logo}
            source={require("../assets/img/logo/logo.png")}
          />
        </View>

      </ImageBackground>
      <TouchableOpacity style={styles.botaoAtivar}>
          <Entypo style={styles.textLogin} name="login" size={35} color="#FFF" />
          <Text
          style={styles.textLogin}
          onPress={() => props.navigation.navigate('Login')} >LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saibamais}>
          <Text style={styles.textSaibaMais}>Saiba mais sobre nossa Empresa!</Text>
        </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'

  },
  logo: {
    width: 400,
    height: 400,
  },
  divLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagemFundo: {
    flex: 1,
    resizeMode: "cover",
    width: '100%',
    borderWidth: 1,
    shadowColor:'#000',
    shadowOffset: {
      width: 1,
      height: 7
    },
    elevation: 8,
    shadowOpacity: 1,
    shadowRadius: 8,
  },
  botaoAtivar: {

    backgroundColor: '#e76041',
    textAlign: 'center',
    justifyContent: 'center',
    height: 130,
    width: 130,
    borderRadius: 100,
    marginTop: -65,
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
  textAtivar:{
    fontSize: 20,
    color: '#fff',

  },

  textLogin: {
    fontSize: 29,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'

  },
  saibamais:{
    fontSize: 18,
    padding: 30,
    color: '#191970',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  textSaibaMais:{
    fontSize: 18,
    color: '#1b2aa0',
    textDecorationLine: 'underline',
    fontWeight: 'bold'
  }


})
