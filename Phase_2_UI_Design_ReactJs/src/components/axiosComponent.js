import { React, Component } from "react";
import { connect } from "react-redux";
import { getLatestJSPost } from "./../utils/fetchExample";
import { List, ListItem, ListItemText, CircularProgress } from "@material-ui/core";

class AxiosExample extends Component {
    render() {  
        return (
            <div>
                <h1>
                    Receieved Data
                </h1> 
                {this.props.dataProp ?             
                    <List>
                        {this.props.dataProp?.data?.children?.map(element => {
                            return(
                                <ListItem>
                                    <ListItemText primary={element?.data?.id} secondary={"random"} />                                
                                </ListItem>
                            );  
                        })}
                    </List>
                    :
                    <CircularProgress />            
                }
            </div>
        );
    }

    componentDidMount() {
        getLatestJSPost();
    }

}

const mapStoreToProps = state => {
    return {
        dataProp: state.dataReducer.data
    }
}


export default connect(mapStoreToProps)(AxiosExample);
