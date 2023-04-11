import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Qrcode from './src/pages/Qrcode';
import Digitar from './src/views/Digitar';
import Relatorio from './src/pages/Relatorio';
import EnviarEmail from './src/pages/EnviarEmail';
import Funcionario from './src/pages/Funcionario';
import HistorioServico from './src/pages/HistoricoServico';
import MaisInfoHisto from './src/pages/MaisInfoHisto';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}
          options={{
            title: 'Tela Principal',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#191970',
            headerShown: true
          }}

        />
        <Stack.Screen name="Login" component={Login}
          options={{
            title: 'Tela Login',
            headerStyle: {
              backgroundColor: '#191970',
            },
            headerTintColor: '#fff',
            headerShown: true
          }}


        />
        <Stack.Screen name="Funcionario" component={Funcionario}
          options={{
            title: 'Tela Funcionário',
            headerStyle: {
              backgroundColor: '#191970',
            },
            headerTintColor: '#fff',
            headerShown: true
          }}


        />
        <Stack.Screen name="Qrcode" component={Qrcode}
          options={{
            title: 'Tela Código de Ativação',
            headerStyle: {
              backgroundColor: '#191970',
            },
            headerTintColor: '#fff',
            headerShown: true
          }}


        />
        <Stack.Screen name="Digitar" component={Digitar} />
        <Stack.Screen name="Relatorio" component={Relatorio}
          options={{
            title: 'Tela do Relatório',
            headerStyle:{
              backgroundColor: '#191970',
            },
            headerTintColor: '#fff',
            headerShown: true
          }}

        />
        <Stack.Screen name="EnviarEmail" component={EnviarEmail} />
        <Stack.Screen name="HistoricoServico" component={HistorioServico} />
        <Stack.Screen name="MaisInfoHisto" component={MaisInfoHisto} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
