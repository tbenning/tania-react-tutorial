// Bring in react "component"
import React, {Component} from 'react';
import Button from './Button'


// Create simple components
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Button</th>
                <th>Delete</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    
    // create a function that takes our property data, and iterates thorugh it using Map, 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><Button buttonLabel={index} /></td>
                <td><button onClick={() => props.removeCharacter(index)}>Del</button></td>
            </tr>
        )
    });
    
    return (
        <tbody>
            {rows}
        </tbody>  
    )
}


// Create the class, render it, return it
class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;
        return (
            <table>
                <TableHeader /> 
                <TableBody characterData = {characterData} removeCharacter = {removeCharacter} />   
            </table>
        )
    }
}

//export the table!
export default Table;