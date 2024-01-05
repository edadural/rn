import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGrid from '../components/CategoryGrid';

export default function CategoriesScreen() {

    function renderCategoryItem(itemData) {
        console.log(itemData.item);
        return (
            <CategoryGrid
                title={itemData.item.title}
                color={itemData.item.color}
            />
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

const styles = StyleSheet.create({})