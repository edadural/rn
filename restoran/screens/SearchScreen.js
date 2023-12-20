import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

export default function SearchScreen() {
    const [searchApi, results, errorMessage] = useResults();

    const [term, setTerm] = useState('');

    const filterResultsByPrice = (price) => {
        return results.filter((result) => {
            return result.price === price
        })
    }

    return (
        <View>

            <SearchBar
                term={term}
                onTermChange={setTerm}  // yazilan kelime yeni term
                onTermSubmit={() => searchApi(term)}     // apiye yollamak icin
            />

            {errorMessage
                ? <Text>{errorMessage}</Text>
                : <>
                    {results.length == 0
                        ? <></>
                        : (<>
                            <ResultsList
                                title='Ucuz Restoranlar'
                                results={filterResultsByPrice('₺')}
                            />
                            <ResultsList
                                title='Uygun Restoranlar'
                                results={filterResultsByPrice('₺₺')}
                            />
                            <ResultsList
                                title='Pahalı Restoranlar'
                                results={filterResultsByPrice('₺₺₺')}
                            />
                        </>)
                    }
                </>}

        </View>
    )
}

const styles = StyleSheet.create({})