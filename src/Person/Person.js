import React from 'react';
import './Person.css';

const Person = (props) => {
    const {name, img, rating, review}=props.person

    return (
        <div>
            <div className='review-body'>
                <img src={img} alt="" srcset="" />
                <h2>Name: {name}</h2>
                <h3>Comment: {review}</h3>
                <h4>Rating: {rating}</h4>

            </div>
        </div>
    );
};

export default Person;