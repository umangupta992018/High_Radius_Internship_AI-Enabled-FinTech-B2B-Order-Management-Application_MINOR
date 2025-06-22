import { React, Component } from "react";


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0                        
        };
    }

    increaseCount = () => {
        this.setState({
            count: this.state.count + 1            
        });
    }
  
    render() {  
        return (
            <div>
                <div>
                    {this.state.count}
                </div>
                <input type="button" value="Increase" onClick={this.increaseCount}/>                
            </div>
        );
    }
}

export default Counter;
