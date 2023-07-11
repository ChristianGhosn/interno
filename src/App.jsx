import "./App.css";
import { Nav, Footer } from "./components";
import { Home } from "./pages";

function App() {
  return (
    <div className="app">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
