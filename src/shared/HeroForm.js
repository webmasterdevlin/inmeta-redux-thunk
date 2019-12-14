import React, {useState} from 'react';
import Button from 'react-bootstrap/Button'
import {addHero} from '../heroes/hero-actions'
import {useDispatch} from 'react-redux'
export default function HeroForm() {
    const dispatch = useDispatch();
    const [newHero, setNewHero] = useState({}) // sending a hero object
    const handleInputChange = (event) => {
        const heroFromForm = {...newHero};
        const {id, value} = event.currentTarget;
        heroFromForm[id] = value;
        setNewHero(heroFromForm);
    }
    const handleSubmit = (e) => {
        e.preventDefault(true);
        dispatch(addHero(newHero));
    }
    return (
        <div>
         <form onSubmit={handleSubmit}>
            <input placeholder={'First Name'} id="firstName" onChange={handleInputChange} />
            <input placeholder={'Last Name'} id="lastName" onChange={handleInputChange} />
          <input placeholder={'House'} id="house" onChange={handleInputChange} />
           <input placeholder={'Known As'} id="knownAs" onChange={handleInputChange} />
           <Button type="submit" variant="primary">Send</Button>
         </form>
        </div>
    )
}
