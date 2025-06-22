import { React, Component } from "react";
import { increase, decrease } from "./../actions/actions";
import { connect } from "react-redux";

class ChangeValue extends Component {
    render() {  
        return (
            <div>
                {this.props.valueProp}
                <input type="button" value="Increment" onClick={() => this.props.increaseProp(6)}/>
                <input type="button" value="Decrease" onClick={() => this.props.decreaseProp(2)}/>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increaseProp: payload => dispatch(increase(payload)),
        decreaseProp: payload => dispatch(decrease(payload))
    }
}

export default connect(null, mapDispatchToProps)(ChangeValue);
