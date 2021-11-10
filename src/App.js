import React from 'react';
import CardList from './component/card-list/card-list.component';
import SearchBox from './search-component/searchbox.component';
import './App.css'
class  App extends React.Component  {
  constructor (){
    super ();
    this.state = {
      monsters : [],
      searchField : '' 

    }
   
  }
  handleChange= e =>{
    this.setState({ searchField:e.target.value})
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then (users => this.setState({monsters: users}))
  }
  render(){
    const{monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
   return (
    <div className="App">
      <h1>Monsters Rolotex</h1>
      <SearchBox
      placeholder = 'search monster'
      handleChange ={this.handleChange}
      />
      <CardList monsters = {filteredMonsters}></CardList>
    </div>
    )};
}

export default App;
