import { createStackNavigator } from '@react-navigation/stack';
import { Pantalla1Screen } from '../screens/Pantalla1';
import { Pantalla2Screen } from '../screens/Pantalla2';

//Definir las rutas y parametros de navegación  
export type RootStachParams = {
    Pantalla1: undefined,
    Pantalla2: undefined,
}

const Stack = createStackNavigator<RootStachParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            
            screenOptions={{
            
                headerStyle: {
                    backgroundColor:'green'
                },
                cardStyle: {
                    backgroundColor: 'white'
                }
            }} >
            <Stack.Screen name="Pantalla1" options={{ title: 'Screen 1' }} component={Pantalla1Screen} />
            <Stack.Screen name="Pantalla2" options={{ title: 'Screen 2' }} component={Pantalla2Screen} />
        </Stack.Navigator>
    );
}