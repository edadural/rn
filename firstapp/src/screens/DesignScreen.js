import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesignScreen() {
    return (
        // <View style={styles.mainView}>
        //     <Text style={styles.mainTextOne}>1</Text>
        //     {/* <Text style={styles.mainTextTwo}>2</Text>
        //     <Text style={styles.mainTextThree}>3</Text> */}
        // </View>

        <View style={{ width: '100%', height: '100%' }}>
            <View style={{ width: '25%', height: '25%', backgroundColor: 'red' }} />
            <View style={{
                width: '25%',
                height: '25%',
                backgroundColor: 'blue',
                position: 'absolute',
                right: 0,
                top: 0,
            }} />
            <View style={{
                width: '25%',
                height: '25%',
                backgroundColor: 'green',
                position: 'absolute',
                bottom: 0,
                left: 0,
            }} />
            <View style={{
                width: '25%',
                height: '25%',
                backgroundColor: 'yellow',
                position: 'absolute',
                bottom: 0,
                right: 0,
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    // mainView: {
    //     borderWidth: 1,
    //     borderColor: 'black',
    //     margin: 20,
    //     borderRadius: 20,
    //     // alignItems: 'center',
    //     // flexDirection: 'row',
    //     // justifyContent: 'space-between',
    //     height: 400
    // },
    // mainTextOne: {
    //     borderWidth: 1,
    //     borderColor: 'red',
    //     margin: 10,
    //     padding: 20,
    //     borderRadius: 10,
    //     // flex: 3,
    //     // alignSelf: 'center',
    //     position: 'absolute',        // kapsayıcıya gore
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     top: 0,
    // },
    // mainTextTwo: {
    //     borderWidth: 1,
    //     borderColor: 'red',
    //     margin: 10,
    //     padding: 20,
    //     borderRadius: 10,
    //     // flex: 5,
    //     top: 10,
    // },
    // mainTextThree: {
    //     borderWidth: 1,
    //     borderColor: 'red',
    //     margin: 10,
    //     padding: 20,
    //     borderRadius: 10,
    //     // flex: 2,
    // },
})