import React, {useEffect, useState} from 'react';

const StrobeLight = ({color: bgColor, frequency}) => {
    const [color, setColor] = useState(bgColor);

    const styles = {
        width: "100px",
        height: "100px",
        background: color
    };

    useEffect(() => {
        const id = setInterval(() => {
            setColor(prevState => {
                return prevState === 'white' ? color : 'white';
            })
        }, frequency);

        return () => window.localStorage.clear();
    }, []);

    return <div style={styles} />
};

export default StrobeLight;
