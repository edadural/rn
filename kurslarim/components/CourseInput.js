import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function CourseInput({ visible, onAddCourse, onCancel }) {

    const [enteredCourseText, setEnteredCourseText] = useState();

    const addCourseHandler = () => {
        onAddCourse(enteredCourseText);
        setEnteredCourseText('');
    }

    // const courseInputHandler = (enteredText) => {
    //     setEnteredCourseText(enteredText);
    // }

    return (
        <Modal
            animationType="slide"
            visible={visible}
        >
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/edlogo.png')}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Yeni Kurs Ekle!'
                    value={enteredCourseText}
                    onChangeText={(text) => { setEnteredCourseText(text) }}         // onChangeText={courseInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='İptal Et'
                            color="red"
                            onPress={onCancel}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Ekle'
                            color="blue"
                            onPress={addCourseHandler}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',        // 0.1 yarı saydamlık
        padding: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 30,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        width: '100%',
        padding: 15,
        borderRadius: 15,
        borderColor: 'rgb(156, 152, 143)',
        backgroundColor: 'rgb(156, 152, 143)',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 15,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
});