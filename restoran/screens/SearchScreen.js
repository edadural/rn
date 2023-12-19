import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

export default function SearchScreen() {
    const [searchApi, results] = useResults();

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price
        })
    }

    return (
        <View>
            <SearchBar />
            <ResultsList title='Ucuz Restoranlar' results={filterResultsByPrice('₺')} />
            <ResultsList title='Uygun Restoranlar' results={filterResultsByPrice('₺₺')} />
            <ResultsList title='Pahalı Restoranlar' results={filterResultsByPrice('₺₺₺')} />
        </View>
    )
}

const styles = StyleSheet.create({})