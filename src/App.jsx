import Detail from "./pages/Detail/Detail";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.css'
import React from "react";

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      bagItems: []
    }
  }

  componentDidUpdate(){
  }

  render() {
    const addItem = (item) => {
      this.setState({ ...this.state, bagItems: [...this.state.bagItems, item] })
    }

    return (
      <div className="background">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home key="Home" bagItems={this.state.bagItems} />
            </Route>
            <Route path="/:slug" >
              <Detail key="detail" setBagItems={addItem} />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
