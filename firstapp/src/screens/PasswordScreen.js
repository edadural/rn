import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function PasswordScreen() {

  const [password, setPassword] = useState('');

  return (
    <View style={styles.main}>

      <Text>Şifrenizi giriniz:</Text>

      <TextInput
        style={styles.input}
        autoCapitalize='none'   // otomatik buyuk harfle baslamsın 
        autoCorrect={false}     // oneri-duzeltme kelimeleri gorunmesin
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
      />

      {password.length < 6
        ? (<Text>Şifre en az 6 karakter olmalıdır</Text>)
        : null}

    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    margin: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  }
})