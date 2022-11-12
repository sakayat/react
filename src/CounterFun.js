import React, {useState} from "react";

const CounterFun = () => {

    const [num,setNum] = useState(5)

    const changeValue = () => {
        const count = num + 1
        setNum(count)
    }

    return(
        <>
            <h1>Count : {num}</h1>
            <button onClick={changeValue}>Click</button>
        </>
    )
}

export default CounterFun
