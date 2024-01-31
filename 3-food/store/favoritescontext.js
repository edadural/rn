import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { },
})

function FavoritesContextProvider({ children }) {
    const [favoriFoodIds, setFavoriFoodIds] = useState([]);

    function addFavorite(id) {
        setFavoriFoodIds((current) => [...current, id]);
    }

    function removeFavorite(id) {
        setFavoriFoodIds((current) => current.filter((foodId) => foodId !== id));
    }

    const value = {
        ids: favoriFoodIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContextProvider;