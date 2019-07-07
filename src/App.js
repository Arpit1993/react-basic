import React,{Component}  from 'react';
import {CardList} from './components/card-list/card-list-component';
import {SearchBox} from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = { 
      monsters: [],
      searchField: ''
    };

   // this.handleChange = this.handleChange.bind(this); //To set the 'this' context to the 'App' Component 
  }
  handleChange = (e) => {
    this.setState({searchField:e.target.value},() => {console.log(this.state);})
  }
  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(function(monster){
     return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters' handleChange={this.handleChange} />  
        <CardList monsters = {filteredMonsters} /> 
      </div>
    );
  }
 componentDidMount(){
   var self = this;
   fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json();
    })
    .then(function(users){
      self.setState({monsters: users});   
    });
 }
}

export default App;
