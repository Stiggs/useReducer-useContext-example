import React from 'react';

import LoginButton from '../LoginButton';

function LogInModal({ text }) {
    return <LoginButton actionType='logIn' text={text} />
}

export default LogInModal;