import { React, useState, useEffect } from "react";

const changeValues = (value1, value2, changeValue1, changeValue2) => {
    changeValue1(value1 + 100);
    changeValue2(value2 + 100);
}

const HooksExample = () => {
    const [value1, changeValue1] = useState(100);
    const [value2, changeValue2] = useState(200);
    
    useEffect(() => {
        console.log("current: ", value1);
        console.log("current: ", value2);
        return () => {
            console.log("prev: ", value1);
            console.log("prev: ", value2);
        }
    }, [value1, value2]);

    return (
      <div>
        <input type="button" value="Change" onClick={() => changeValues(value1, value2, changeValue1, changeValue2)} />
        {value1}
        {value2}
      </div>
    );
}

export default HooksExample;
