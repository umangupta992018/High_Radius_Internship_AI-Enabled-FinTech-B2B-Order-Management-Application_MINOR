import { React, useCallback, useState } from "react";

const increaseState = (value1, value2, changeValue1, changeValue2) => {
    changeValue1(value1 + 100);
    changeValue2(value2 + 100);
}

const decreaseState = (value1, value2, changeValue1, changeValue2) => {
    changeValue1(value1 - 100);
    changeValue2(value2 - 100);
}

const changeValues = (value1, value2, changeC) => {
    changeC(value1 + value2);
}

const CallBackComponent = () => {
    const[a, changeA] = useState(100);
    const[b, changeB] = useState(200);
    const[c, changeC] = useState(0);

    const myCallBack = useCallback(
        () => {
            changeValues(a, b, changeC);
        },[a, b, c],
    );

    console.log("Re-render");
    return (
        <div>
            <div>
                A: {a}
                B: {b}
                C: {c}
            </div>
            <input type="button" value="Increase" onClick={() => increaseState(a, b, changeA, changeB)} />        
            <input type="button" value="Decrease" onClick={() => decreaseState(a, b, changeA, changeB)} />        
            <input type="button" value="Change" onClick={() => myCallBack(a,b,changeC)} />        
        </div>
    );
}

export default CallBackComponent;
