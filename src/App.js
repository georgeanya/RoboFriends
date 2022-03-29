import React, { Component } from 'react';
import CardList from './Cardlist';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            filteredrobots: [],
            searchFeild: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => {
            this.setState({robots: [...users], filteredrobots: [...users]})
        })
        .catch(err => console.log(err))
    }

    onSearchChange = (event) => {
        this.setState({ searchFeild: event.target.value })
        const filter = this.state.robots.filter(robots => robots.name.toLowerCase().includes(event.target.value.toLowerCase()))
        this.setState({filteredrobots: filter})
    }
    render() {
        // const filteredrobots = this.state.robots.filter(robots => {
        //     return robots.name.toLowerCase().includes(this.state.searchFeild.toLowerCase());
        // });
        if (this.state.length === 0) {
            return <h2>Loading...</h2>
        } else {
            return (
                <div className='tc'>
                    <h1 className='sagafont f1 tt'>RoboFriends</h1>
                    <SearchBox SearchChange={this.onSearchChange}/>
                    <CardList robots={this.state.filteredrobots}/>
                </div>
            );
        }
    }
}

export default App;