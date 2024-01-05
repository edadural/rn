import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AuthContent from '../components/AuthContent'
import Loading from '../components/Loading';
import { login } from '../util/auth';

export default function LoginScreen() {
    const [isAuthanticating, setIsAuthanticating] = useState(false);

    async function loginHandler({ email, password }) {
        setIsAuthanticating(true);
        try {
            await login(email, password);
        } catch (error) {
            Alert.alert('Giriş yapılamadı. Lütfen bilgilerinizi kontrol ediniz..')
        }
        setIsAuthanticating(false);
    }

    if (isAuthanticating) {
        return <Loading message="Kullanıcı girişi yapılıyor.." />;
    }

    return (
        <AuthContent isLogin onAuthenticate={loginHandler} />
    )
}

const styles = StyleSheet.create({})