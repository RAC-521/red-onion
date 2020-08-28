import React from 'react';
import './Dinner.css';
import Food from '../Food/Food';
import fakeData from '../../fakeData';

const Dinner = () => {
    const dinnerItems = fakeData.filter( item => item.category === 'dinnerItem');
    return (
            <div className="container">
                <div className="card-group">
                        {
                            dinnerItems.map( item => 
                                <Food
                                    food={item}>
                                </Food> )
                        }
                </div>
            </div>
    );
};

export default Dinner;