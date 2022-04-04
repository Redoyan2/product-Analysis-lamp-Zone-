import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';
import './Reviews.css';

const Reviews = () => {

    const [persons, setPersons] = useState([]);



    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setPersons(data))
    })

    return (
        <div>
            <div className='person-cart-container'>
                {
                    persons.map(person => <Person

                        key={person.id}
                        person={person}
                    >

                    </Person>)
                }

            </div>
        </div>
    );
};

export default Reviews; <h1>THis is Reviews </h1>