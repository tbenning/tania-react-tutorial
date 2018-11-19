//import
import React, {Component} from 'react';

// create class, render, return 
class Form extends Component { 
    constructor(props) {
        super(props);

        // Set the state of the form, since it has a state too
        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name] : value
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }
    
    
    render () {
        const { name, job } = this.state;
    return (
    <form>
            <label>Name</label>
            <input 
                type="text" 
                name="name" 
                value={name}
                onChange={this.handleChange}
                />
            <label>Job</label>
            <input 
                type="text" 
                name="job" 
                value={job}
                onChange={this.handleChange}
                />
                <input 
                    type="button"
                    value="Submit"
                    onClick={this.submitForm}

                />
        </form>
    );
}
}

// export default
export default Form;
