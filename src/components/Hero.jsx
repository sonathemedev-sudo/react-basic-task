import { useState } from "react";

function Hero({name}) {
    const [show, setShow] = useState(true);
    return(
        <div className="hero_banner_wrapper">
            <h2 className="heading">Hello, I am {name}.</h2>
            <button onClick={() => setShow(!show)}>Toggle role</button>
            {show && <p>Full stack developer 🚀</p>}
        </div>
    );
}

export default Hero;