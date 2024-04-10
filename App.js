// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Formulario from './screens/form/Formulario';
import Formulario2 from './screens/form/Formulario2';
import CameraScreen from './screens/camera/CameraScreen'; // 

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FormularioParte1">
        <Stack.Screen name="FormularioParte1" component={Formulario} options={{ title: 'Parte 1' }} />
        <Stack.Screen name="FormularioParte2" component={Formulario2} options={{ title: 'Parte 2' }} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} options={{ title: 'Tirar Foto' }} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
