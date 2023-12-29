import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title';
import CustomButton from '../components/CustomButton';

export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
    return (
        <View style={styles.container}>
            <Title>Oyun Tamamlandı !</Title>
            <View style={styles.imageView}>
                <Image
                    style={styles.image}
                    source={require('../assets/success.png')}
                />
            </View>
            <Text style={styles.result}>
                <Text style={styles.countAndNumber}>{roundsNumber}</Text> denemeyle
                <Text style={styles.countAndNumber}> {userNumber}</Text> sayısını buldun
            </Text>
            <View style={styles.border}>
                <CustomButton
                    onPress={onStartNewGame}
                >
                    Yeni Oyuna Başla
                </CustomButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageView: {
        width: 350,
        height: 350,
        overflow: 'hidden',
        borderRadius: 175,
        borderWidth: 3,
        borderColor: 'brown',
        margin: 30,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    result: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 20,
    },
    countAndNumber: {
        color: 'brown',
    },
    border: {
        borderWidth: 3,
        borderRadius: 20,
        borderColor: 'white',
    },
})