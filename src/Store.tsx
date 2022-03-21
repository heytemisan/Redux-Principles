import React from 'react';

interface IState {
    episode: [],
    favourites: [],
}


const initialState: IState = {
    episode: [],
    favourites: [],
}

export const Store = React.createContext<IState>(initialState);

function reducer() {
    //pass
}

export function StoreProvider(props: any): JSX.Element {
    return (
        <Store.Provider value={initialState}>
            {props.children}
        </Store.Provider>
    )
}