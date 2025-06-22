import { React, Component } from "react";

class ThirdComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.data
        }        
    }
    
    render() {        
        return (
            <p>{this.state.show}</p>
        );
    }
}

export default ThirdComponent;
