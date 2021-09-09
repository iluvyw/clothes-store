import CardView from "./components/CardView/CardView"
import Detail from "./pages/Detail/Detail";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="background">
        <Route component={Home} path="/" exact/>
        <Route component={Detail} path="/:slug" />
      </div>
    </BrowserRouter>
  );
}

export default App;
