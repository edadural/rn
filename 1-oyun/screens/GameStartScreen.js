import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import Title from '../components/Title';

export default function GameStartScreen({ onSendNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function resetHandler() {
        setEnteredNumber('');
    }

    function confirmHandler() {
        const chosenNumber = parseInt(enteredNumber)
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Geçersiz Sayı!', 'Sayı 1 ile 99 arasında olmalıdır', [
                { text: 'Tamam', style: 'destructive', onPress: resetHandler }
            ]);
            return;
        }
        onSendNumber(chosenNumber);
    }

    function numberHandler(text) {
        setEnteredNumber(text);
    }


    return (
        <View style={styles.container}>
            <Title>Sayı Tahmin Uygulaması</Title>
            <View style={styles.card}>
                <TextInput
                    style={styles.input}
                    keyboardType='number-pad'       // sadece sayi
                    maxLength={2}                   // max 2 sayi girilir
                    value={enteredNumber}
                    onChangeText={numberHandler}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <CustomButton onPress={resetHandler}>Temizle</CustomButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton onPress={confirmHandler}>Onayla</CustomButton>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#80370f',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        marginTop: 20,
        borderRadius: 20,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    input: {
        borderBottomWidth: 2,
        borderBottomColor: '#db9158',
        width: 50,
        height: 50,
        marginVertical: 10,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
})