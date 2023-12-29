import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import ComputerNumber from '../components/ComputerNumber';
import CustomButton from '../components/CustomButton';

let minNumber = 1;
let maxNumber = 100;

export default function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = generateNumber(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver();
        }
    }, [currentGuess, userNumber, onGameOver]);


    function nextGuessHandler(direction) {

        if (
            (direction === 'lower' && currentGuess < userNumber)
            || (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert('Yanlış Seçim', 'Sayıları karşılaştırıp tekrar deneyin...', [
                { text: 'Tamam', style: 'cancel' },
            ]);
            return;
        }

        if (direction === 'lower') {
            maxNumber = currentGuess;
        } else {
            minNumber = currentGuess + 1;
        }

        const newRandomNumber = generateNumber(minNumber, maxNumber, currentGuess);
        setCurrentGuess(newRandomNumber);
    }

    function generateNumber(min, max, exclude) {
        const randomNumber = Math.floor(Math.random() * (max - min)) + min;

        if (randomNumber === exclude) {
            return randomNumber(min, max, exclude);
        } else {
            return randomNumber;
        }
    }

    return (
        <View style={styles.container}>
            <Title>Bilgisayar Tahmini</Title>
            <ComputerNumber>{currentGuess}</ComputerNumber>
            <View>
                <Text>Tahmin edilen sayı girilen sayıdan fazla mı az mı</Text>
                <View>
                    <CustomButton
                        onPress={nextGuessHandler.bind(this, 'lower')}
                    >
                        -
                    </CustomButton>
                    <CustomButton
                        onPress={nextGuessHandler.bind(this, 'greater')}
                    >
                        +
                    </CustomButton>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
})