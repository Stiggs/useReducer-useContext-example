import React from 'react';

import './index.css';

function Layout({ children }) {
    return (
        <div className="Container">
            {children}
        </div>
    );
}

export default Layout;