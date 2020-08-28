import React from 'react';
import './Lunch.css';
import Food from '../Food/Food';
import fakeData from '../../fakeData';

const Lunch = () => {
    const lunchItems = fakeData.filter( item => item.category === 'lunchItem');
    return (
        <div className="container">
            <div className="card-group">
                    {
                        lunchItems.map( item => 
                            <Food
                                food={item}>
                            </Food> )
                    }
            </div>
        </div>
    );
};

export default Lunch;