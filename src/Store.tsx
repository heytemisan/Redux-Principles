import React from 'react';

export const Store = createContext();

const initialState = {}

function reducer() {
    //pass
}

export function StoreProvider(props: any): JSX.Element {
    return (
        <Store.Provider value="test">
            {props.children}
        </Store.Provider>
    )
}