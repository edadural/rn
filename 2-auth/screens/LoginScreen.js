import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import AuthContent from '../components/AuthContent'
import Loading from '../components/Loading';
import { login } from '../util/auth';
import { AuthContext } from '../store/auth-context';

export default function LoginScreen() {
    const [isAuthanticating, setIsAuthanticating] = useState(false);
    const authContext = useContext(AuthContext);

    async function loginHandler({ email, password }) {
        setIsAuthanticating(true);
        try {
            const token = await login(email, password);
            authContext.authenticate(token);

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