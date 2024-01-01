import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({ label, keyboardType, onUpdateValue, value, secure }) {
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                keyboardType={keyboardType}
                onChangeText={onUpdateValue}
                value={value}
                secureTextEntry={secure}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical:8,
    },
    label: {
        color: 'white',
        marginBottom: 5,
    },
    input: {
        backgroundColor: '#f2d3ed',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 20,
        fontSize: 16,
    },
})