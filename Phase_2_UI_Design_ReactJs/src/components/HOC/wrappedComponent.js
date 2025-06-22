import { React, Component } from "react";
import Parent from "./parentComponent";


class Child extends Component {
    render() {  
        return (
            <div>
                {this.props.value}
            </div>            
        );
    }
}

export default Parent(Child);
