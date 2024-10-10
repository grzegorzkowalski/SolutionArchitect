import {useEffect, useState} from 'react';

const Box = () => {
    const [color, setColor] = useState("green");

    const styles = {
        width: "100px",
        height: "100px",
        background: color
    };

    useEffect(() => {
        const id = setInterval(() => {
            setColor(prevState => {
                return prevState === 'green' ? 'red' : 'green';
            })
        }, 2500);
        console.log(id);
        return () => clearInterval(id);
    }, []);

    return <div style={styles} />;
};

export default Box;
