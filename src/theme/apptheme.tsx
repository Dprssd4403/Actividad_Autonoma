import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        alignSelf: 'center',
        textAlign:'justify',
        color:'blue',
        fontWeight:'bold'
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    resultado: {
        marginTop: 20,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'red'
    },
})
