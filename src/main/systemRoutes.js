import React from 'react';

import { HashRouter, Routes, Route } from "react-router-dom";
import Main from '../view/main';
import Technical from '../view/technical';

function SystemRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/technical" element={<Technical />} />
            </Routes>
        </HashRouter>
    )
}

export default SystemRoutes;