import React, {useState} from 'react';

const TextTyper = ({text}) => {
    const [counter, setCounter] = useState(1);

    const remove = (e) => {
        console.log(e);
        setCounter(prev => {
            return prev - 1 >= 1 ? prev - 1 : 1;
        });
    }

    const add = (e) => {
        console.log(e);
        setCounter(prev => {
            return prev + 1 <= text.length ? prev + 1 : text.length;
        });
    }

    return (
        <div>
            <button onClick={remove}>-</button>
            <button onClick={e => add(e)}>+</button>
            <h2>{text.slice(0, counter)}</h2>
        </div>
    );
};

export default TextTyper;
