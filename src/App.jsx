import Home from "./components/Home/Home"
import Detail from "./components/Detail/Detail";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact/>
        <Route component={Detail} path="/:slug" />
      </div>
    </BrowserRouter>
  );
}

export default App;
