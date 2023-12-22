import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext';

export default function IndexScreen() {

    const { state, addBlogPost } = useContext(Context);

    return (
        <View>
            {/* <Text>IndexScreen</Text> */}

            <Button
                title="Ekle"
                onPress={addBlogPost}
            />

            <FlatList
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({});