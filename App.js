import * as React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'



// import Soatc from './screens/Soatc.js';
// import Request from './screens/Request.js';
import HomeScreen from './screens/HomeScreen.js';
import Login from './screens/Login.js';
import Pays from './screens/Pays.js';
import Insurance from './screens/Insurance.js';
import Shock from './screens/Shock.js';
import Citas from './screens/Citas.js';
import Profile from './screens/Profile.js';
import Shop from './screens/Shop.js';
import Cotizar from './screens/Cotizar.js';
import Soat from './screens/Soat.js';
import Detalle from './screens/Detalle.js';
import pdf from './screens/pdf.js';
import AgendarExplorer from './screens/AgendarExplorer.js';
import PagarExplorer from './screens/PagarExplorer.js';
import Movilidad from './screens/Movilidad.js';
import Salud from './screens/Salud.js';
import Hogar from './screens/Hogar.js';
import Vida from './screens/Vida.js';


const Stack = createStackNavigator();
console.disableYellowBox = true;

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none" >
        <Stack.Screen headerMode={'none'} name="HomeScreen" component={HomeScreen} />
          <Stack.Screen headerMode={'none'} name="Login" component={Login} />
         
          <Stack.Screen headerMode={'none'} name="Salud" component={Salud} />
          <Stack.Screen headerMode={'none'} name="Hogar" component={Hogar} />
          <Stack.Screen headerMode={'none'} name="Vida" component={Vida} />
          <Stack.Screen headerMode={'none'} name="Movilidad" component={Movilidad} />          
          <Stack.Screen headerMode={'none'} name="Profile" component={ Profile } />
          <Stack.Screen headerMode={'none'} name="Shock" component={ Shock } />
          <Stack.Screen headerMode={'none'} name="Citas" component={ Citas } />
          <Stack.Screen headerMode={'none'} name="Insurance" component={ Insurance } />
          <Stack.Screen headerMode={'none'} name="Detalle" component={ Detalle } />
          <Stack.Screen headerMode={'none'} name="pdf" component={ pdf } />
          <Stack.Screen headerMode={'none'} name="Shop" component={ Shop } />
          <Stack.Screen headerMode={'none'} name="Cotizar" component={ Cotizar } />
          <Stack.Screen headerMode={'none'} name="Pays" component={ Pays } />
          <Stack.Screen headerMode={'none'} name="Soat" component={ Soat } />
          <Stack.Screen headerMode={'none'} name="AgendarExplorer" component={ AgendarExplorer } />
          <Stack.Screen headerMode={'none'} name="PagarExplorer" component={ PagarExplorer } />

                
        </Stack.Navigator>
      </NavigationContainer>
  );
}


export default App;
