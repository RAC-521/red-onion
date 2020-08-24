import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import './FoodSection.css';
import fakeData from '../../fakeData';
import Food from '../Food/Food';

const FoodSection = () => {
    const breakfastItems = fakeData.filter( item => item.category === 'breakfastItem');
    const lunchItems = fakeData.filter( item => item.category === 'lunchItem');
    const dinnerItems = fakeData.filter( item => item.category === 'dinnerItem');
    // const [breakfast, setBreakfast] = useState(breakfastItems);
    // const [lunch, setLunch] = useState(lunchItems);
    // const [dinner, setDinner] = useState(dinnerItems);

    return (
            <div className="container">
                <div className="card-group">
                        {
                            breakfastItems.map( item => 
                                <Food
                                    food={item}>
                                </Food> )
                        }
                </div>
            </div>
    );
};

export default FoodSection;