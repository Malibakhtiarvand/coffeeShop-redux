import React, { Component } from "react";
import { ContextPR } from "./components/context/context";
import Header from "./components/header";
import Main from "./components/main";
import { getsHttpMethod } from "./services/httpMethods";

class App extends Component {
  state = {
    prs: [],
    selectedPrs: [],
    count: 0,
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

  componentDidMount() {
    const fetching = async () => {
      const { data } = await getsHttpMethod();
      this.setState({ prs: data });
    };
    fetching();
  }
  render() {
    return (
      <ContextPR.Provider
        value={{
          prs: this.state.prs,
          count: this.state.count,
          selectedPRs: this.addToCard,
        }}
      >
        <Header />
        <Main />
      </ContextPR.Provider>
    );
  }
}

export default App;
