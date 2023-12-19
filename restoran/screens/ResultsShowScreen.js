import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export default function ResultsShowScreen({ route }) {

    const [result, setResult] = useState(null);

    const id = route.params.id;

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(() => {
        getResult(id);
    }, [])

    if (!result) {
        return null;
    }

    return (
        <View>
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.phone}>{result.phone}</Text>

            <View style={styles.icon}>
                {result.is_closed ? (
                    <AntDesign name="closecircleo" size={40} color="black" />
                ) : (
                    <MaterialIcons name="delivery-dining" size={40} color="black" />
                )}
            </View>

            <FlatList
                data={result.photos}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        alignSelf: 'center',
        fontSize: 25,
        marginVertical: 10,

    },
    phone: {
        alignSelf: 'center',
        fontSize: 20,
    },
    image: {
        height: 180,
        margin: 10,
        borderRadius: 20,
    },
    icon: {
        alignSelf: 'center',
    }
})