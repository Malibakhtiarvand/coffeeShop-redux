import React, { Component } from "react";
import CardDialog from "./components/cardDialog";
import { ContextPR } from "./components/context/context";
import Header from "./components/header";
import Main from "./components/main";
import { getsHttpMethod } from "./services/httpMethods";

class App extends Component {
  state = {
    prs: [],
    selectedPrs: [],
    count: 0,
    showDialog: false,
  };

  addToCard = (pr) => {
    const prsSelected = this.state.selectedPrs;
    const last = prsSelected.find((x) => x.id == pr.id);
    if (last) {
      last.count++;
      console.log(prsSelected);
    } else {
      prsSelected.push({ ...pr, count: 1 });
    }

    var count = this.state.count;
    count++;
    this.setState({ selectedPrs: prsSelected, count: count });
  };

  cardDialogShow = () => {
    this.setState({ showDialog: !this.state.showDialog });
  };
  
  render() {
    return (
      <ContextPR.Provider
        value={{
          prs: this.state.prs,
          count: this.state.count,
          selectedPRs: this.state.selectedPrs,
          showCardDialog: this.state.showDialog,
          setSelectedPrs: this.addToCard,
          changeShow: this.cardDialogShow,
        }}
      >
        <CardDialog />
        <Header />
        <Main />
      </ContextPR.Provider>
    );
  }
}

export default App;
