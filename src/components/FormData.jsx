import { useState } from "react";

function FormData() {
    const [name, setName] = useState("");
    return(
        <>
            <hr />
            <input 
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <h2>My name is {name}.</h2>
        </>
    )
}

export default FormData;