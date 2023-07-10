import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExplorePage from "./Pages/Explore/ExplorePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExplorePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
