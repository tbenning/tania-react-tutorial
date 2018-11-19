import React, {Component} from 'react';

//Create class, render, return
class Button extends Component {
    render () {
        const { buttonLabel } = this.props;
        return (
            <button>{buttonLabel}</button>
        )
    }
}

//Export default 
export default Button;
