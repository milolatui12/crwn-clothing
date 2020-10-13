import ShopActionTypes from './shop.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = (errorMessage) => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {       //thunk is just a function that return a function that get access to dispatch
return dispatch => {                                        //we can dispatch multiple actions and handle asynchronous code inside of it    
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());              //switch to fetch collections

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            dispatch(fetchCollectionsSuccess(collectionsMap));      //update collections if it success by call this action
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))     //throw the error if it fail by call this action
    }
}