import React from 'react';

interface burgerProps {
    src: string;
    value: React.MouseEventHandler;
    col: number;
    dealite: React.MouseEventHandler;
    name:string;
}

const Burger: React.FC<burgerProps> = (props) => {
    return (
        <div className='main-block'>
            <div onClick={props.value}>
                <p>{props.name}</p>
                <img alt='ingridientImg' src={props.src}/>
                <span>{props.col} x</span>
            </div>
            <button onClick={props.dealite}>dealite</button>
        </div>
    );
};

export default Burger;