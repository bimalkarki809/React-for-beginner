import { useState } from "react";
import {createContext} from 'react';

const FavoritesContext= createContext({favorites: [], totalFavorites: 0, 
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {}, 
    itemIsFavorite: (meetupId) => {}

});



export function FavoritesContextProvider(props) {

    function addFavoriteHandler(favoriteMeetup) {
        setUserFavorites((prevUserFavorites => {
            return prevUserFavorites.concat(favoriteMeetup)
        }))

    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites(prevUserFavorites => {
        return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some(meetup => meetup.id == meetupId)
    }

    
    const[userFavorites, setUserFavorites]= useState([])

    const context= {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    return <FavoritesContext.Provider value={context}>
    {props.children}

    </FavoritesContext.Provider>

}
export default FavoritesContext;
