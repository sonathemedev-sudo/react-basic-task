import { useState } from "react";

function ProfileCard({name}) {
    const [show, setShow] = useState(false);

    return(
        <div>
            <h2>{name}</h2>
            <button onClick={() => setShow(!show)}>Show profile</button>
            {show && <p>I'm a Full stack developer.</p>}
        </div>
    )
}

export default ProfileCard;