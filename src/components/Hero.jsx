import { useState } from "react";

function Hero({name}) {
    const [show, setShow] = useState(false);
    return(
        <div className="hero_banner_wrapper">
            <h2 className="heading">Hello, I am {name}.</h2>
            <button onClick={() => setShow(!show)}>Click here</button>
            {show && <p>Full stack developer 🚀</p>}
            <hr/>
        </div>
    );
}

export default Hero;