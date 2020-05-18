import React, { Component } from 'react';
import { v4 as uuidv4} from 'uuid';
import Box from './Box'
import NewBoxForm from './NewBoxForm'

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = { boxList: [] };
        this.addNewBox = this.addNewBox.bind(this);
        this.deleteBox = this.deleteBox.bind(this);
    }

    addNewBox(newBox) {
        const newBoxWithId = {...newBox, id: uuidv4()};
        const newBoxList = [...this.state.boxList, newBoxWithId];
        this.setState({ boxList: newBoxList });
    }

    deleteBox(boxId) {
        const newBoxList = this.state.boxList.filter((box) => box.id !== boxId);
        this.setState({ boxList: newBoxList });
    }

    render() {
        const boxes = this.state.boxList.map((box) => {
            return <Box id={box.id} key={box.id} width={box.width} height={box.height} backgroundColor={box.backgroundColor} delete={this.deleteBox}/>;
        });
        return (
        <div>
            <NewBoxForm addBox={this.addNewBox}/>
            { boxes }
        </div>
        );
    }
}

export default BoxList;