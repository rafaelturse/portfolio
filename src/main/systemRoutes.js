import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from '../view/main';
import Technical from '../view/technical';

function SystemRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Main />} />
                <Route exact path="/technical" element={<Technical />} />
            </Routes>
        </BrowserRouter>
    )
}

export default SystemRoutes;