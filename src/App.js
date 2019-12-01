import React, { Component }from 'react';
import './App.css';
import { Search } from './components/search/search-box.component';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Search 
          placeholder='Search Monster'
          handleChange={this.handleChange}
         />  
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
