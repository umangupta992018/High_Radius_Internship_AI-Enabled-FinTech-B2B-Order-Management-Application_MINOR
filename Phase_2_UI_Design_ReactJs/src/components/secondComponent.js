import { React, PureComponent } from "react";

class SecondComponent extends PureComponent {
    
    render() {
        return (
            <p>{this.props.data}</p>
        );
    }
}

export default SecondComponent;
