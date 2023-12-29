import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>
}

const styles = StyleSheet.create({
    title: {
        borderWidth: 4,
        borderColor: '#b34e29',
        textAlign: 'center',
        padding: 20,
        marginBottom: 20,
        borderRadius: 20,
        color: 'white',
        fontSize: 35,
        fontWeight: '600',
    }
})