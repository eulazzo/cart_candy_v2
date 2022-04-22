import Card from "./components/Card";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<Card />} />
        <Route path="/:slug" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
