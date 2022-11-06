import React from "react";
import randomWords from 'random-words';

import ComponentClass from "./components/ConponentClass/ComponentClass";
import PureComponentClass from "./components/PureConponentClass/PureComponentClass";
import ComponentFunc from "./components/ComponentFunc";
import Button from './components/Button'

export default class App extends React.Component {
  state = {
    count: 0,
    str: 'str',
    pure: 'pure',
    func: 'func',
  }

  componentDidMount() { {/* Метод, который вызывается после render */}
    setInterval(() => {
      if (this.state.count % 2) {
        this.setState({
          count: this.state.count + 1,
          str: randomWords(),
        })
      } else {
        this.setState({
          count: this.state.count + 1,
          str: randomWords(),
          pure: randomWords(),
          func: randomWords(),
        })
      }
    }, 2000)
  }

  render() {
    console.clear();
    return (
      <header className="App-header">
        <Button text="Click"/>
        <ComponentClass string={this.state.str}/>
        <PureComponentClass string={this.state.pure}/>
        <ComponentFunc string={this.state.func}/>
      </header>
  );
  }
}