import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

export default function IndexScreen({ navigation }) {

    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

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
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Show', { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title}</Text>
                                <TouchableOpacity
                                    onPress={() => deleteBlogPost(item.id)}
                                >
                                    <EvilIcons name="trash" size={28} color="black" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 20,
        borderColor: 'gray',
    },
    title: {
        fontSize: 18,
    }
});