import { React, Component } from "react";


class ErrorHandling extends Component {

    componentDidMount() {
        console.log(this.abc.xyz);
    }

    render() {  
        return (
            <div>
                Error Handling
            </div>
        );
    }
}

export default ErrorHandling;
