import React, {Component} from 'react';
import Table from './Table';
import Button from './Button';
import Form from './Form';

const name = 'Tyler';
const heading = <h1 className="site-heading">Hello, {name}</h1>;

class App extends Component {

    state = {
        characters: []
    };

    // Create a method to remove a character 
    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    //Create a method to submit and handle the submit
    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]});
    }


    render() {
        const { characters } = this.state;
        return (
        <div className="small-container">
            {heading}
            <Form handleSubmit={this.handleSubmit} />

            <Table
                characterData={characters}
                removeCharacter={this.removeCharacter} 
            />
        </div>
    );
    }
}

export default App;