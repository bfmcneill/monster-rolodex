import { Component } from "react";
import styled from "styled-components";
import { CardList } from "./card-list/card-list.component";
import { SearchBox } from "./search-box/search-box.component";
import GlobalStyle from "../theme/globalStyle";
import './App.css'

const StyledApp = styled.div`
  text-align: center;
`;

const StyledH1 = styled.h1`
  font-family: "Bigelow Rules";
  font-size: 72px;
  color: #0ccac4;
`;

class App extends Component {
  constructor() {
    super();
    this.state = { monsters: [], searchField: "" };
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((users) =>
        this.setState({ monsters: users }, () => console.log(this.state))
      );
  }

  handleChange = (event) => {
    return this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    return (
      <>
        <GlobalStyle />
        <StyledApp>
          <StyledH1>Monster Rolodex</StyledH1>
          <SearchBox
            type="search"
            placeholder="search"
            handleChange={this.handleChange}
          />
          <CardList monsters={filteredMonsters} />
        </StyledApp>
      </>
    );
  }
}

export default App;
