import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
    return (
        <View style={styles.backgorundStyle}>
            <AntDesign
                style={styles.iconStyle}
                name="search1"
                size={30}
                color="black"
            />
            <TextInput
                style={styles.inputStyle}
                placeholder='Ara'
                autoCorrect={false}
                autoCapitalize='none'
                value={term}
                onChangeText={onTermChange}     // degistiginde
                onEndEditing={onTermSubmit}     // yazi bittikten sonra
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgorundStyle: {
        backgroundColor: 'lightgray',
        flexDirection: 'row',
        margin: 10,
        height: 50,
        alignItems: 'center',
        borderRadius: 20,
    },
    iconStyle: {
        marginHorizontal: 15,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
})