import React, { useEffect, useState } from 'react';
import Customers from '../Customers/Customers';
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
                {
                    persons.slice(0,3).map(person=><Customers
                    
                        key={persons.id}
                        person={person}
                    >

                    </Customers>)
                }


            </div>
        </div>
    );
};

export default Reviews; 