import React from 'react';

interface IState {
    episodes: [],
    favourites: [],
}

const initialState: IState = {
    episodes: [],
    favourites: [],
}

interface IAction {
    type: string,
    payload: any
}
//create the store & then pass "episodes & favourite" from initialState
export const Store = React.createContext<IState | any>(initialState); //[pass]

//reducer manipulates the store
function reducer(state: IState, action: IAction): IState {//[pass]
    switch (action.type) {
        case 'FETCH_DATA': //checked
            return { ...state, episodes: action.payload }
        default:
            return state
    }
}

export function StoreProvider(props: any): JSX.Element {
    //storeProvider gives the component in the app access to the store.
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <Store.Provider value={{state, dispatch}}>
            {props.children}
        </Store.Provider>
    )
}

// https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes