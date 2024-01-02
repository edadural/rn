import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input';
import Button from './Button';

export default function AuthForm({ isLogin, onsubmit, credentialsInvalid }) {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

    const {
        email: emailIsInvalid,
        confirmEmail: emailsDontMatch,
        password: passwordIsValid,
        confirmPassword: passwordDontMatch,
    } = credentialsInvalid;

    console.log(emailIsInvalid, emailsDontMatch, passwordIsValid, passwordDontMatch);

    function submitHandler() {
        onsubmit({
            email: enteredEmail,
            confirmEmail: enteredConfirmEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
        })
    }

    function updateInput(inputType, enteredValue) {
        switch (inputType) {
            case 'email':
                setEnteredEmail(enteredValue);
                break;
            case 'password':
                setEnteredPassword(enteredValue);
                break;
            case 'confirmEmail':
                setEnteredConfirmEmail(enteredValue);
                break;
            case 'confirmPassword':
                setEnteredConfirmPassword(enteredValue);
                break;
        }
    }

    return (
        <View>
            <Input
                label="Email"
                keyboardType="email-address"
                onUpdateValue={updateInput.bind(this, 'email')}
                value={enteredEmail}
                isInvalid={emailIsInvalid}
            />

            {/* && => '?:' yerine sadece geçerli olduğu zaman yazılı */}
            {!isLogin && (
                <Input
                    label="Emaili Doğrula"
                    keyboardType="email-address"
                    onUpdateValue={updateInput.bind(this, 'confirmEmail')}
                    value={enteredConfirmEmail}
                    isInvalid={emailsDontMatch}
                />
            )}

            <Input
                label="Şifre"
                secure      // gizliyo
                onUpdateValue={updateInput.bind(this, 'password')}
                value={enteredPassword}
                isInvalid={passwordIsValid}
            />

            {!isLogin && (
                <Input
                    label="Şifre Doğrula"
                    secure
                    onUpdateValue={updateInput.bind(this, 'confirmPassword')}
                    value={enteredConfirmPassword}
                    isInvalid={passwordDontMatch}
                />
            )}

            <View style={styles.buttons}>
                <Button onPress={submitHandler}>
                    {isLogin ? 'Giriş Yap' : 'Kaydol'}
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        marginTop: 10,
    },
})