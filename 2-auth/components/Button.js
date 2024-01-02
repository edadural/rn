import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button({ children }) {
    return (
        <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
        >
            <View>
                <Text style={styles.text}>{children}</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#531a50',
        paddingVertical: 12,
        borderRadius: 20,
    },
    pressed: {
        opacity: 0.5,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    }
})