import { React, Component } from "react";

class IncreaseComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {  
        return (
            <input type="button" value="increment" onClick={this.props.increaseMethod}/>
        );
    }
}

export default IncreaseComponent;
