import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return ( <
        Typewriter options = {
            {
                strings: [
                    "Mobile Developer",
                    "Web Developer",
                    "Freelancer",
                    "MERN Stack Developer",
                    "Robotic Enthusiasts",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }
        }
        />
    );
}

export default Type;