import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ColorChange({ color, onIncrease, onDecrease }) {
    return (
        <View>
            <Text>{color}</Text>
            <Button
                title={`${color} arttır`}
                onPress={() => onIncrease()}
            />
            <Button
                title={`${color} azalt`}
                onPress={() => onDecrease()}
            />
        </View>
    );
}

const styles = StyleSheet.create({})