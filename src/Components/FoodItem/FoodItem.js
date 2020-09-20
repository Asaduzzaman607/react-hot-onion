import React from 'react';
import { Card } from 'react-bootstrap';
import './FoodItem.css';

const FoodItem = (props) => {
    

    const{name,price,detail,image}=props.food
    console.log(props.food)
    return (
        <div className="col-md-4 col-sm-6">
            <Card className="food-card" style={{ width: '21rem' }}>
                <Card.Img className="food-img" style={{width: '80%', alignItems: 'center', alignContent: 'center', padding:'20px', margin: 'auto'}}variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='food-title'>{name}</Card.Title>
                    <Card.Text className="lead">
                   {detail}
                    </Card.Text>
                     <h4 variant="primary">${price}</h4>
                </Card.Body>
           </Card>
        </div>
    );
};

export default FoodItem;