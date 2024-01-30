import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function FoodItem({ id, title, imageUrl, affordability, complexity }) {

    const navigation = useNavigation();

    const FoodItemHandler = () => {
        navigation.navigate('FoodDetail', {
            foodId: id,
        });
    };

    return (
        <View style={styles.foodItem}>
            <Pressable
                style={({ pressed }) => [
                    pressed ? styles.buttonPressed : null]}
                onPress={FoodItemHandler}
            >
                <View style={styles.innerView}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View style={styles.details}>
                        <Text style={styles.detailsItem}>{complexity}</Text>
                        <Text style={styles.detailsItem}>{affordability}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    foodItem: {
        margin: 15,
        backgroundColor: 'white',
        // golge
        elevation: 4,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        //
        borderRadius: 10,
    },
    innerView: {},
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 8,
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    detailsItem: {
        marginHorizontal: 4,
    },
    buttonPressed: {
        opacity: 0.5,
    },
})