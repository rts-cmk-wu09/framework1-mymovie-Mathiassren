import "./App.css";

import { Outlet } from "react-router-dom";

import DetailsView from "./pages/DetailsView";

import ListView from "./pages/ListView";

function App() {
  return (
    <div className="App">
      <Outlet />
    </div>
  );
}

export default App;
