import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return(
        <>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    );
}

export default Counter;