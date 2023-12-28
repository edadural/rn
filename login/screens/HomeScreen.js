import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

    const navigation = useNavigation();

    const handleSignOut = () => {
        auth.signOut()
            .then(() => {
                navigation.navigate('Login');
            })
            .catch((error) => alert(error.message));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.home}>Ana Sayfa</Text>
            <Text style={styles.text}>Kullanıcı email: {auth.currentUser?.email}</Text>
            <TouchableOpacity
                onPress={handleSignOut}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Çıkış Yap</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    home :{
        fontSize: 30,
        marginBottom: 20,
        fontWeight: '700',
    },
    text: {
        fontSize: 20,
    },
    button: {
        backgroundColor: '#0782F9',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        width: '60%',
        marginTop: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
})