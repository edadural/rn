import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomButton({ children, onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={({ pressed }) => pressed
                    ? [styles.buttonInnerContainer, styles.pressed]         // tıklandiginda belli olsun 
                    : styles.buttonInnerContainer
                }
                onPress={onPress}
            >
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 5,
        marginHorizontal: 40,
    },
    buttonInnerContainer: {
        paddingVertical: 8,
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 23,
        fontWeight: '600',
    },
    pressed: {
        opacity: 0.50,
    }
})