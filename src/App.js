import React, { Component } from "react";
import CardDialog from "./components/cardDialog";
import { ContextPR } from "./components/context/context";
import Header from "./components/header";
import Main from "./components/main";

class RenderByContext extends Component {
  state = {
    showDialog: false,
  };

  cardDialogShow = () => {
    this.setState({ showDialog: !this.state.showDialog });
  };

  render() {
    return (
      <ContextPR.Provider
        value={{
          showCardDialog: this.state.showDialog,
          changeShow: this.cardDialogShow,
        }}
      >
        <CardDialog />
        <Header />
      </ContextPR.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <>
        <RenderByContext />
        <Main />
      </>
    );
  }
}

export default App;
