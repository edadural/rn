import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FOODS } from '../data/dummy-data';
import FoodIngredients from '../components/FoodIngredients';

export default function FoodDetailScreen({ route }) {

    const foodId = route.params.foodId;
    const selectedFood = FOODS.find((food) => food.id === foodId)

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
            <Text style={styles.title} >{selectedFood.title}</Text>
            <View style={styles.details}>
                <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
                <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
            </View>
            <View style={styles.listContainer}>
                <View style={styles.subTitleContainer}>
                    <Text style={styles.subTitle}>İçindekiler</Text>
                </View>
                <FoodIngredients data={selectedFood.ingredients} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 50,
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        color: '#0f1c42',
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    detailItem: {
        marginHorizontal: 4,
        color: '#718cde',
        fontWeight: 'bold',
    },
    listContainer: {
        width: '100%',
        paddingHorizontal: 10,
    },
    subTitleContainer: {
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBlockColor: '#192d6b',
        marginVertical: 5,
    },
    subTitle: {
        color: '#192d6b',
        fontSize: 20,
        fontWeight: 'bold',
    },
})