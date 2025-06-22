import axios from "axios";
import { store } from "../reducer/store";
import { loadData } from "./../actions/actions";

export const getLatestJSPost = () => {
    
    const API_URL = "https://www.reddit.com/r/javascript.json";
    
    axios(API_URL)
        .then((res) => {
            store.dispatch(loadData(res.data));
        })
        .catch((err) => console.log("Error occurred: ", err));
};