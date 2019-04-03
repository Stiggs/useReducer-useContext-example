import React, { useReducer } from 'react';

const Store = React.createContext(null);
const initialState = {
    isLoggedIn: false,
    isModalOpen: false,
    modalComponent: null,
    modalData: {},
};

function reducer(state, action) {
    switch (action.type) {
        case 'logIn':
            return { ...state, isLoggedIn: true };
        case 'logOut':
            return { ...state, isLoggedIn: false };
        case 'openModal':
            return { ...state, isModalOpen: true };
        case 'closeModal':
            return { ...state, isModalOpen: false };
        case 'setModal':
            return { ...state, isModalOpen: true, modalComponent: action.data.modalComponent, modalData: action.data.modalData };
        default:
            throw new Error('Invalid action type dispatched');
    }
}

function StoreContainer({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleClick() {
        console.info(state);
    }

    return (
        <Store.Provider value={dispatch}>
            {children}
            <p>{`Logged in? ${state.isLoggedIn ? 'Yes' : 'No'}`}</p>
            <code onClick={handleClick}>Click to log state</code>
            <br />
            <br />
            {state.isModalOpen && <state.modalComponent {...state.modalData} />}
        </Store.Provider>
    )
}

export { Store, StoreContainer };