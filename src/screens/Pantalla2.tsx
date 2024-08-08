
import React, { useState } from 'react'
import { Button, Text, TextInput, View } from 'react-native'
import { CommonActions, useNavigation } from '@react-navigation/native'
import { styles } from '../theme/apptheme';
import { InputComponent } from '../commons/InputComponent';


export const Pantalla2Screen = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState('');

    const division = () => {
        const numero1 = parseFloat(num1);
        const numero2 = parseFloat(num2);

        if (numero1 === 0 && numero2 === 0) {
            setResultado('INDETERMINACIÓN');

        } else if (numero2 === 0) {
            setResultado('NO EXISTE DIVISIÓN PARA CERO');

        } else {
            setResultado((numero1 / numero2).toString());

        }
    };

    //const [mostrarResultado, setMostrarResultado] = useState<boolean>(false);
    //setMostrarResultado(true);

    return (

        <View style={styles.container}>
            
            <View style={styles.container}>
            <Text style={styles.title}>FORMULARIO</Text>
                <InputComponent value={num1} onChangeText={setNum1} placeholder="Número 1" />
                <InputComponent value={num2} onChangeText={setNum2} placeholder="Número 2" />
                <Button title="Dividir" onPress={division} />
                {resultado 
                ? <Text style={styles.resultado}>{resultado}</Text> 
                : null} 
            </View>
        </View>
    );
};

