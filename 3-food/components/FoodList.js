import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FoodItem from './FoodItem';

export default function FoodList({ items }) {
    function renderFoodItem(itemData) {
        const foodItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity,
        }

        return <FoodItem {...foodItemProps} />;
    }

    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.id}
                renderItem={renderFoodItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({})