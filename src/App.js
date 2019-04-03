import React, { useContext } from 'react';

import { StoreContainer } from './components/StoreContainer';
import ButtonGroup from './components/ButtonGroup';
import Layout from './components/Layout';
import LoginButton from './components/LoginButton';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            </header>
            <section>
                <Layout>
                    <StoreContainer>
                        <LoginButton actionType='logIn' text='Log In' />
                        <LoginButton actionType='logOut' text='Log Out' />
                        <br />
                        <br />
                        <ButtonGroup />
                    </StoreContainer>
                </Layout>
            </section>
        </div>
    );
}

export default App;
