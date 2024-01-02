import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthForm from './AuthForm';
import ButtonWhite from './ButtonWhite';
import { useNavigation } from '@react-navigation/native';

export default function AuthContent({ isLogin }) {

    const navigation = useNavigation();

    function switchScreen() {
        if (isLogin) {
            navigation.navigate('Signup')
        } else {
            navigation.navigate('Login')
        }
    }

    return (
        <View style={styles.container}>
            <AuthForm isLogin={isLogin} />
            <View style={styles.button}>
                <ButtonWhite onPress={switchScreen}>
                    {isLogin ? 'Yeni Kullanıcı Oluştur' : 'Giriş Yap'}
                </ButtonWhite>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#822f82',
        marginTop: 50,
        marginHorizontal: 30,
        padding: 25,
        borderRadius: 20,
        // golge
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
        //
    },
    button: {
        marginTop: 2,
    },
})