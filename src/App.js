import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExplorePage from "./Pages/Explore/ExplorePage";
import Communities from "./Pages/Explore/Communities";
import HomePage from "./Pages/Explore/HomePage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ExplorePage />} />
          <Route path="/notifications" element={<ExplorePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/communities" element={<Communities />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
