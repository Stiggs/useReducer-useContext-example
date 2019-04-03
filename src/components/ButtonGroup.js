import React, { useContext } from 'react';

import { Store } from './StoreContainer';
import SelectionModal from './Modals/SelectionModal';
import LogInModal from './Modals/LogInModal';

function ButtonGroup() {
    const dispatch = useContext(Store);

    function handleSelectionClick() {
        dispatch({
            type: 'setModal',
            data: { modalComponent: SelectionModal },
        });
    }

    function handleLogInClick() {
        dispatch({
            type: 'setModal',
            data: {
                modalComponent: LogInModal,
                modalData: { text: 'Testing!' },
            }
        });
    }

    function handleCloseModalClick() {
        dispatch({ type: 'closeModal' });
    }

    return (
        <div>
            <button onClick={handleSelectionClick}>Selection</button>
            <button onClick={handleLogInClick}>Log In</button>
            <button onClick={handleCloseModalClick}>Close Modal</button>
        </div>
    );
}

export default ButtonGroup;