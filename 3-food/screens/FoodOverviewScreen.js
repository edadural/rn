import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { FOODS, CATEGORIES } from '../data/dummy-data';
import FoodList from '../components/FoodList';

export default function FoodOverviewScreen({ route, navigation }) {

    const categoryId = route.params.categoryId;
    const displayedFood = FOODS.filter((foodItem) => {
        return foodItem.categoryIds.indexOf(categoryId) >= 0
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title

        navigation.setOptions({
            title: categoryTitle,
        });
    }, [navigation, categoryId]);

    // console.log(displayedFood);

    return (
        <FoodList items={displayedFood} />
    )
}

const styles = StyleSheet.create({})