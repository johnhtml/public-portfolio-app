import React, { useState } from 'react';
import { useSpring, animated, config } from 'react-spring'

function Welcome() {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
    })

    return (
        <div>
            <animated.h1 style={props}>Welcome</animated.h1>
            <animated.p style={props}>feel free to explore my personal developer portfolio</animated.p>
        </div>
    );
}

export default Welcome;