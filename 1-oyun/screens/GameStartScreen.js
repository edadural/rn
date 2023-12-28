import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'

export default function GameStartScreen() {
    return (
        <View>
            <Text>Sayı Tahmin Uygulaması</Text>
            <CustomButton>Temizle</CustomButton>
            <CustomButton>Onayla</CustomButton>
        </View>
    )
}

const styles = StyleSheet.create({})