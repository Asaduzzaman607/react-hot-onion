import React, { useEffect, useState } from 'react';
import { Navbar } from 'react-bootstrap';
import foodData from '../../images/foods'
import FoodItem from '../FoodItem/FoodItem';

const FoodBanner = () => {

    const[foods, setFoods] =useState([])
    console.log(foods)

    const [category, setCategory] = useState('lunch')

    useEffect(() =>{
        const selectedCategory = foodData.filter(food => food.category == category)
        setFoods(selectedCategory)
    },[category])

    return (
        <>
      
        <div className="container">
            
            <div className="item-links">
                <a  onClick={() =>setCategory('breakfast')}> Breakfast</a>
                <a onClick={() =>setCategory('lunch')}> Lunch</a>
                <a onClick={() =>setCategory('dinner')}> Dinner</a>
                
            </div>
            <div className="row">
                {
                    foods.map(food => <FoodItem food={food}></FoodItem>)
                }

            </div>
           
        
        </div>
        </>
    );
};

export default FoodBanner;