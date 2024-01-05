import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodItem({ id, title, imageUrl, affordability, complexity }) {
    return (
        <View>
            <Text>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})