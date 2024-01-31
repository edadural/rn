import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useContext, useLayoutEffect } from 'react';
import { FOODS } from '../data/dummy-data';
import FoodIngredients from '../components/FoodIngredients';
import { AntDesign } from '@expo/vector-icons';
import { FavoritesContext } from '../store/favoritescontext';
import { useSelector, useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';

export default function FoodDetailScreen({ route, navigation }) {

    const favoriteFoodsIds = useSelector((state) => state.favoriteFoods.ids);
    // const favoriteFoodContext = useContext(FavoritesContext);
    const foodId = route.params.foodId;

    const dispatch = useDispatch();

    const selectedFood = FOODS.find((food) => food.id === foodId);

    // const foodIsFavorite = favoriteFoodContext.ids.includes(foodId);

    const foodIsFavorite = favoriteFoodsIds.includes(foodId);

    const pressHandler = () => {
        console.log("tıklandı");
    }

    function changeFavorite() {
        if (foodIsFavorite) {
            dispatch(removeFavorite({ id: foodId }))
            // favoriteFoodContext.removeFavorite(foodId);
        } else {
            dispatch(addFavorite({ id: foodId }))
            // favoriteFoodContext.addFavorite(foodId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Pressable
                        onPress={pressHandler}
                        style={({ pressed }) => (pressed ? styles.pressed : null)}
                    >
                        <AntDesign
                            name={foodIsFavorite ? 'star' : 'staro'}
                            size={24}
                            color="white"
                            onPress={changeFavorite}
                        />
                    </Pressable>
                );
            }
        });
    }, [navigation, changeFavorite]);

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
    pressed: {
        opacity: 0.5,
    }
})