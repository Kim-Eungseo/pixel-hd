import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import MainPage from "./pages/mainPage";
import ExplorePage from "./pages/explorePage";


const Root = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="explore" element={<ExplorePage />} />
                {/* <Route path="invoices" element={<Invoic />} /> */}
            </Routes>
        </BrowserRouter>

    )
}

export default Root;