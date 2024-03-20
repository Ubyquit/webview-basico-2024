import * as React from 'react';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Páginas de tu aplicación
function PaginaWeb() {
  return (
    <WebView
      source={{ uri: 'https://opset.mx/' }}
      style={{ flex: 1 }}
    />
  );
}

function PaginaAcademia() {
  return (
    <WebView
      source={{ uri: 'https://academiahacking.online/' }}
      style={{ flex: 1 }}
    />
  );
}

function PaginaProyectos() {
  return (
    <WebView
      source={{ uri: 'https://opset.mx/proyectos/' }}
      style={{ flex: 1 }}
    />
  );
}

// Pila de navegación para cada página
function WebStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PaginaWeb" component={PaginaWeb} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function AcademiaStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PaginaAcademia" component={PaginaAcademia} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function ProyectosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PaginaProyectos" component={PaginaProyectos} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

// Tab Navigator
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Web') {
            iconName = focused ? 'earth' : 'earth-outline';
          } else if (route.name === 'Academia') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'Proyectos') {
            iconName = focused ? 'business' : 'business-outline';
          }

          // Devuelve el icono basado en el nombre de la ruta
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Web" component={WebStack} />
      <Tab.Screen name="Academia" component={AcademiaStack} />
      <Tab.Screen name="Proyectos" component={ProyectosStack} />
    </Tab.Navigator>
  );
}

// App
function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default App;
