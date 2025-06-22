import { React, Component } from "react";


class LifeCycle extends Component {
    //mounting
    constructor(props) {
        super(props);
        console.log("constructor");
    }

    static getDerivedStateFromProps(props, state) {        
        console.log("getDerivedStateFromProps");        
        return props;
    }

    render() {  
        console.log("render");
        return (
            <div>
                {this.state.object.count}
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    //update
    shouldComponentUpdate(nextProps,nextState) {
        console.log("shouldComponentUpdate");
        console.log(this.state);        
        console.log(nextState);
        return this.state.object.count !== nextState.object.count;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return {
            state: this.state,
            props: this.props
        }
    }

    componentDidUpdate(prevProps,prevState,snapshot) {
        console.log("componentDidUpdate");        
    }

    //unmount
    componentWillUnmount() {
        console.log("componentWillUnmount");        
    }
}

export default LifeCycle;
