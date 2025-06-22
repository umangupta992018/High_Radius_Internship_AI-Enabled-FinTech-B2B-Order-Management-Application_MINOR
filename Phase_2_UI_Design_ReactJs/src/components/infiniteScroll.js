import React, { useEffect } from "react";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";

function ScrollExample() {
  
  let [responseData, setResponseData] = React.useState([]);
  let [isNext, isNextFunc] = React.useState(true);
  let [pageCount, setCount] = React.useState(1);

  const fetchData = () => {
    if(isNext) { 
      setTimeout(() => {
        axios.get(
          `https://jsonplaceholder.typicode.com/photos?_page=${pageCount}&_limit=10%60`
        ).then((response) => {
          setResponseData([...responseData, ...response.data]);
        }).catch((error) => {
          console.log(error);
        });
      }, 5000);      
    }
  };
  
  function fetchMoreData() {
    setCount(pageCount + 1);
    if(pageCount > 5) {
      isNextFunc(false);
    }
    fetchData();
  }

  useEffect(() =>{
    fetchMoreData();
  }, [])

  return (
    <div>
      <header>
        <h1>Fetching Data</h1>
      </header>
      <InfiniteScroll
        dataLength={responseData.length}
        next={fetchMoreData}
        hasMore={isNext}
        loader={
          <div
            style={{ height: "80%", paddingLeft: "35%", overflow: "hidden" }}
          >
            <CircularProgress />
          </div>
        }
      >
        <div>
          {responseData.map((data, index) => (
            <div
              key={index.toString()}
              style={{ height: "200px", width: "40%" }}
            >
              <li>{index}</li>
              <img src={data.thumbnailUrl} alt={"No img"} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
export default ScrollExample;