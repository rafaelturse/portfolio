import React from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function SystemRoutes() {
    return (
        <Router>
                <Routes>
                    {/*<Route exact path="/categories" element={<Categories />} />*/}
                    {/*<Route exact path="/definitions" element={<Definitions />} />*/}
                </Routes>
        </Router>
    )
}

export default SystemRoutes;