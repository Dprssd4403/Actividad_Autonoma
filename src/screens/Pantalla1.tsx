import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Button, Image, Text, TouchableOpacity, View } from 'react-native'
import { CommonActions } from '@react-navigation/native';
import { RootStachParams } from '../navigator/StackNavigator';
import { styles } from '../theme/apptheme';

//interface - objeto 
interface Persona {
    id: number;
    nombre: string;
    correo: string;
}

//Recibir las propiedades de navegacion 
//Interface - props de navegación 
interface Props extends StackScreenProps<RootStachParams, 'Pantalla1'> { };



export const Pantalla1Screen = ({ navigation }: Props) => {

    //objeto persona 

    const Stack = createStackNavigator();

    return (
        <View  style={styles.container}>
            <View>
                <Text  style={styles.title}>BIENVENIDOS</Text>
                <View>
                    <Image source={{
                        uri: 'https://www.comunicare.es/wp-content/uploads/2021/11/app-marketing.jpg'
                    }}
                        style={styles.image}
                    />
                </View>
                <View>
                <Button
                    title='Acceder'
                    onPress={() => navigation.navigate('Pantalla2')}
                />
                </View>
                
            </View>
        </View>
    )
}