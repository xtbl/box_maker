import React, { Component } from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(evt) {
        console.log('delete box');
        this.props.delete(this.props.id);
    }

    render() {
        return (
        <div style={{ height: `${this.props.height}px`, width: `${this.props.width}px`, backgroundColor: this.props.backgroundColor }}>
            <div onClick={this.handleDelete}>x</div>
            <div>
                BOX {this.props.width} x {this.props.height}
            </div>
        </div>
        );
    }
}

export default Box;