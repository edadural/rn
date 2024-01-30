import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FoodIngredients({ data }) {
    return data.map((dataIng) => (
        <View key={dataIng} style={styles.listItem}>
            <Text style={styles.itemText}>{dataIng}</Text>
        </View>
    ))
}

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: '#192d6b',
        marginVertical: 4,
        marginHorizontal: 12,
        borderRadius: 10,
        paddingVertical: 5,
    },
    itemText: {
        textAlign: 'center',
        color: '#c4d0f2',
    },
})