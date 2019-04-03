import React, { useContext } from 'react';

import { Store } from './StoreContainer';

function LoginButton({ actionType, text }) {
    const dispatch = useContext(Store);

    function handleClick() {
        dispatch({ type: actionType });
    }

    return (
        <button onClick={handleClick}>{text}</button>
    )
}

export default LoginButton;