import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from './Input';

export default function AuthForm({ isLogin }) {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    function updateInput(inputType, enteredValue) {
        switch (inputType) {
            case 'email':
                setEnteredEmail(enteredValue);
                break;
            case 'password':
                setEnteredPassword(enteredPassword);
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
            />
            <Input
                label="Şifre"
                secure      // gizliyo
                onUpdateValue={updateInput.bind(this, 'password')}
                value={enteredPassword}
            />
        </View>
    )
}

const styles = StyleSheet.create({})