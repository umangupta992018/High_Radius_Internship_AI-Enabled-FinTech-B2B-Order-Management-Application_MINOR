import { React, Component } from "react";

const Parent = Child => class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value * 2
        }
    }
    render() {
        return (
            <div>
                <h3>Parent</h3>
                <Child value={this.state.value} />
            </div>
        );
    }
 };

export default Parent;