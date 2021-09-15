import Detail from "./pages/Detail/Detail";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import './App.css'
import React from "react";
import SanityClient from './client';

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      bagItems: []
    }
    this.componentCleanUp = this.componentCleanUp.bind(this)
  }

  componentWillMount(){
    console.log('App mount',this.state.bagItems)
  }

  componentDidMount(){
    window.addEventListener('beforeunload', () => this.componentCleanUp())
  }

  componentCleanUp(){
    this.state.bagItems.forEach(item => {
      SanityClient
        .patch(item.id)
        .inc({ remainNumber: item.number })
        .commit()
        .catch(() => console.error());
    });
  }

  componentWillUnmount(){
    this.componentCleanUp()
    window.removeEventListener('beforeunload', () => this.componentCleanUp())
  }

  render() {
    const addItem = (item) => {
      let temp = this.state.bagItems.filter(element => element.id === item.id)
      if (temp.length > 0){
        const num = item.number
        let items = this.state.bagItems
        for (let i=0;i<items.length;i++){
          if (items[i].id === item.id){
            items[i].number += num
            this.setState({...this.state, bagItems: items})
            break
          }
        }
      }
      else{
        this.setState({ ...this.state, bagItems: [...this.state.bagItems, item] })
      }
    }

    const deleteItem = (id) => {
      this.setState({...this.state, bagItems: this.state.bagItems.filter(item => item.id !== id)})
    }

    return (
      <div className="background">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Home key="Home" bagItems={this.state.bagItems} deleteItem={deleteItem}/>
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
