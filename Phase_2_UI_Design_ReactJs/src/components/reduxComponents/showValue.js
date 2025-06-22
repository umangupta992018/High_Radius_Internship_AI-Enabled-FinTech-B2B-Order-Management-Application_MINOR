import { React, Component } from "react";
import { connect } from "react-redux";

class ShowValue extends Component {
    render() {  
        return (
            <div>
                {this.props.valueProp}
            </div>
        );
    }
}

const mapStoreToProps = state => {
    return {
        valueProp: state.value
    }
}

export default connect(mapStoreToProps)(ShowValue);
