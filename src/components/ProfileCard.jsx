import { useState } from "react";

function ProfileCard({name}) {
    const [show, setShow] = useState(false);

    return(
        <div>
            <hr />
            <button onClick={() => setShow(!show)}>Show profile</button>
            {show && <p>Hello there, this is {name} here and I'm Full stack developer.</p>}
        </div>
    )
}

export default ProfileCard;