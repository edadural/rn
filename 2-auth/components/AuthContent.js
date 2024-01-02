import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthForm from './AuthForm';
import ButtonWhite from './ButtonWhite';
import { useNavigation } from '@react-navigation/native';

export default function AuthContent({ isLogin }) {
    const navigation = useNavigation();
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmEmail: false,
        confirmPassword: false,
    });

    function submitHandler(credentials) {
        console.log(credentials);
        let { confirmEmail, confirmPassword, email, password } = credentials;

        email = email.trim();     // sağ-sol boşluksuz
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6;
        const emailAreEqual = email === confirmEmail;
        const passwordAreEqual = password === confirmPassword;

        if (!emailIsValid || !passwordIsValid || (!isLogin && (!emailAreEqual || !passwordAreEqual))) {
            Alert.alert('Hops!', 'Lütfen girdiğiniz değerleri kontrol ediniz!');
            setCredentialsInvalid({
                email: !emailIsValid,
                confirmEmail: !emailIsValid || !emailAreEqual,
                password: !passwordIsValid,
                confirmPassword: !passwordIsValid || !passwordAreEqual,
            })
            return;
        }
    }

    function switchScreen() {
        if (isLogin) {
            navigation.navigate('Signup')
        } else {
            navigation.navigate('Login')
        }
    }

    return (
        <View style={styles.container}>

            <AuthForm
                credentialsInvalid={credentialsInvalid}
                isLogin={isLogin}
                onsubmit={submitHandler}
            />

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