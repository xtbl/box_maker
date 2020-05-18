import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { height: 0, width: 0, backgroundColor: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addBox(this.state);
    }
    handleChange(evt) {
        console.log(`change name`, evt.target.name);
        console.log(`change value`, evt.target.value);
        this.setState({[evt.target.name]: evt.target.value});
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="height">Height:</label>
                <input name="height" type="text" value={this.state.height} onChange={this.handleChange}/>
                <label htmlFor="width">Width:</label>
                <input name="width" type="text" value={this.state.width} onChange={this.handleChange}/>
                <label htmlFor="backgroundColor">BackgroundColor:</label>
                <input name="backgroundColor" type="text" value={this.state.backgroundColor} onChange={this.handleChange}/>

                <input type="submit" value="Create Box"/>
            </form>
        );
    }
}

export default NewBoxForm;