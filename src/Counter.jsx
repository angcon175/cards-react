import { useState } from "react";

export default function Counter(){
    let [count, setCount] = useState(0)

    let increment = () => {
        setCount(count+1)
    }

    return (
        <>
            <h1>Count = {count}</h1>
            <button onClick={increment}>Count me</button>
        </>
    )
}