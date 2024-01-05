import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import AuthContent from '../components/AuthContent';
import { createUser } from '../util/auth';
import Loading from '../components/Loading';
import { AuthContext } from '../store/auth-context';


export default function SignupScreen() {
    const [isAuthanticating, setIsAuthanticating] = useState(false);
    const authContext = useContext(AuthContext);

    async function signupHandler({ email, password }) {
        setIsAuthanticating(true);
        try {
            const token = await createUser(email, password);
            authContext.authenticate(token);
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