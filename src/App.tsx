import React, {useState} from 'react';
import './App.css';
import meatImage from './assets/meat.jpg';
import saladImage from './assets/salad.jpg';
import cheeseImage from './assets/cheese.jpg';
import baconImage from './assets/bacon.jpg';
import Burger from "./burger";

function App() {
    type Ingredient = {
        name: string,
        price: number,
        image: string
    }
    const INGREDIENTS: Ingredient[] = [
        {name: 'Bacon', price: 60, image: meatImage},
        {name: 'Salad', price: 10, image: saladImage},
        {name: 'Meat', price: 80, image: cheeseImage},
        {name: 'Cheese', price: 50, image: baconImage},
    ];

    const [ingredients, setIngredients] = useState([
        {name: 'Bacon', count: 0},
        {name: 'Salad', count: 0},
        {name: 'Meat', count: 0},
        {name: 'Cheese', count: 0},
    ]);

    const getTotalPrice = ingredients.reduce((acc, ingridient) => {
        const nameIngridient = ingridient.name
        for (let i = 0; i < INGREDIENTS.length; i++) {
            if (nameIngridient === INGREDIENTS[i].name) {
                return acc + (ingridient.count * INGREDIENTS[i].price)
            }
        }
        return acc
    }, 30)

    const value = (index: number) => {
        const copyIngridients = [...ingredients];
        copyIngridients[index].count++
        setIngredients(copyIngridients)
    }

    const valueOfCol = (index: number) => {
        return ingredients[index].count
    }

    const dealite = (index: number) => {
        const copyIngridients = [...ingredients];
        if (copyIngridients[index].count !== 0){
            copyIngridients[index].count--
        }
        setIngredients(copyIngridients)
    }

    let btnBurger = ingredients.map((item, index) => (
        <Burger src={INGREDIENTS[index].image} value={() => value (index)} col={valueOfCol(index)} dealite={() => dealite(index)}/>
    ))

    return (
        <div className="App">
            {getTotalPrice}
            <div className='Container'>
                <div>
                    {btnBurger}
                </div>
                <div className='block-with-burger'>
                    <div className="Burger">
                        <div className="BreadTop">
                            <div className="Seeds1"></div>
                            <div className="Seeds2"></div>
                        </div>
                        <div className="BreadBottom"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
