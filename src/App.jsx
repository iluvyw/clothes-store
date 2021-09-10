import Detail from "./pages/Detail/Detail";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.css'
import { useEffect, useState } from "react";

function App() {
  const [bagItems,setBagItems] = useState([])

  useEffect(() => {
    console.log('rerender')
  }, [])

  return (
    <BrowserRouter>
      <div className="background">
        <Route component={() => <Home bagItems={bagItems}/>} path="/" exact/>
        <Route component={(props) => <Detail {...props} bagItems={bagItems} setBagItems={setBagItems}/>} path="/:slug" />
      </div>
    </BrowserRouter>
  );
}

export default App;
