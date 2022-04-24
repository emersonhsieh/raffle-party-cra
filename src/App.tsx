import { Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import CreateRaffle from "./screens/CreateRaffle";
import AddToPool from "./screens/AddToPool";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list-token" element={<CreateRaffle />} />
      <Route path="/add-to-pool" element={<AddToPool />} />
    </Routes>
  );
}

export default App;
