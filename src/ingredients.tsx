import React from 'react';

interface ingredientsProps {
    ingredient:string
}

const Ingredients:React.FC<ingredientsProps> = (props) => {
    return (
        <div className={props.ingredient}>
        </div>
    );
};

export default Ingredients;