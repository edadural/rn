import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hoşgeldiniz</Text>
            <Text style={styles.text}>Başarılı bir şekilde giriş yaptınız.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 20,
    }
})