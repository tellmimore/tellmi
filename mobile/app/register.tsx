import { Text, View } from "@/components/Themed"
import { register } from "@/utils/server"
import { router } from "expo-router"
import { useState } from "react"

import { Alert, Button, Pressable, StyleSheet, TextInput } from "react-native"

export default function Register() {

    const [code, setCode] = useState<string>("")

    const showError = (error: string) => {
        Alert.alert('Error', error)
    }

    const handleCodeChange = (text: string) => {
        setCode(text)
    }

    const handleButtonPress = async () => {
        console.log('registering');


        register(code)
            .then(() => {
                router.replace('/(tabs)')
            }).catch((error: Error) => {
                showError(error.message)
            })
    }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome to <Text style={{fontWeight: 'bold'}}>Tellmi</Text>!
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Participation code"
                onChangeText={handleCodeChange}
                value={code}
            />
            
            <Pressable style={styles.buttonContainer} onPress={handleButtonPress}>
                <Text style={styles.buttonText}>Continue</Text>
            </Pressable>
            <Text>{code}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 30,
    },

    input: {
        fontSize: 20,
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
        width: '80%',
        textAlign: 'center',
        backgroundColor: '#efefef'
    },

    buttonText: {
        borderRadius: 8,
        marginTop: 10,
        fontSize: 20,
        padding: 10,
        width: '80%',
        textAlign: 'center',
        backgroundColor: '#333',
        color: '#fff',
        overflow: 'hidden'
    },

    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})