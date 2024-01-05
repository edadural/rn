import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthContent from '../components/AuthContent';
import { createUser } from '../util/auth';
import Loading from '../components/Loading';


export default function SignupScreen() {
    const [isAuthanticating, setIsAuthanticating] = useState(false);

    async function signupHandler({ email, password }) {
        setIsAuthanticating(true);
        try {
            await createUser(email, password);
        } catch (error) {
            Alert.alert('Kayıt olunamadı. Lütfen bilgilerinizi kontrol ediniz..')
        }
        setIsAuthanticating(false);
    }

    if (isAuthanticating) {
        return <Loading message="Kullanıcı oluşturuluyor.." />;
    }

    return (
        <AuthContent onAuthenticate={signupHandler} />
    )
}

const styles = StyleSheet.create({})