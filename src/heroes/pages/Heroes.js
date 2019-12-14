import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {fetchHeroes} from '../hero-actions'

export default function Heroes() {
    const dispatch = useDispatch();
    const {heroes, isLoading} = useSelector(s => s.heroReducer);
    useEffect(() => {
        dispatch(fetchHeroes())
    }, [])
    return (
        <div>
            <h1>Heroes works!</h1>
            <ul>{
                isLoading
                ? 
                <h2>Loading.. Please wait..</h2>
                :
                heroes.map(h => <li key={h.id}>{`${h.firstName} ${h.lastName} is ${h.knownAs}`}</li>)
            }</ul>
        </div>
    )
}
