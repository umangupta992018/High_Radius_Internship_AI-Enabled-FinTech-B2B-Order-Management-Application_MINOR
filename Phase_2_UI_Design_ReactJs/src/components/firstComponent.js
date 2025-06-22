import { React, Component } from "react";
import SecondComponent from "./secondComponent";
import ThirdComponent from "./thirdComponent";

class FirstComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: "first",
            child: {
                second: "second",
                third: "third"
            }
        }
    }
  
    render() {  
        return (
            <div>
                <p>{this.state.first}</p>
                <SecondComponent data={this.state.child.second}/>
                <ThirdComponent data={this.state.child.third}/>            
            </div>
        );
    }
}

export default FirstComponent;
