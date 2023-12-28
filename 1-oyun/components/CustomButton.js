import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomButton({ children }) {
    return (
        <View>
            <Text>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})