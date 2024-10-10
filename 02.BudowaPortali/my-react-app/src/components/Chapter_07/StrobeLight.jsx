import React, {useEffect, useState} from 'react';

const StrobeLight = (props) => {
    const [color, setColor] = useState(props.color);

    const styles = {
        width: "100px",
        height: "100px",
        background: color
    };

    useEffect(() => {
        const id = setInterval(() => {
            setColor(prevState => {
                return prevState === 'white' ? props.color : 'white';
            })
        }, props.frequency);

        return () => window.localStorage.clear();
    }, []);

    return <div style={styles} />
};

export default StrobeLight;
