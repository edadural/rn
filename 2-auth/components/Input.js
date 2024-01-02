import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Input({ label, keyboardType, onUpdateValue, value, secure, isInvalid }) {
    return (
        <View style={styles.inputContainer}>
            {/* && doğruysa demek -- '?:' yerine kullanılır */}
            <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
                {label}
            </Text>
            <TextInput
                style={[styles.input, isInvalid && styles.inputInvalid]}
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
        marginVertical: 8,
    },
    label: {
        color: 'white',
        marginBottom: 10,
        marginLeft: 5,
    },
    labelInvalid: {
        color: 'red',
    },
    input: {
        backgroundColor: '#f2d3ed',
        padding: 11,
        borderRadius: 20,
        fontSize: 18,
    },
    inputInvalid: {
        backgroundColor: '#eb5b78',
    },
})