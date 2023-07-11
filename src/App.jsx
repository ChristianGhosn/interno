import { Outlet } from "react-router-dom";
import "./App.css";
import { Nav, Footer } from "./components";

function App() {
  return (
    <div className="app">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
