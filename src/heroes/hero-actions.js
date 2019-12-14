import {getHeroes} from './hero-service'

/* actions types */
export const FETCH_HEROES_REQUEST = "FETCH_HEROES_REQUEST";
export const FETCH_HEROES_SUCCESS = "FETCH_HEROES_SUCCESS";
export const FETCH_HEROES_FAIL = "FETCH_HEROES_FAIL";

/* action creators: thunk version */
export const fetchHeroes = () => {
    return async (dispatch) => {
        dispatch({type: FETCH_HEROES_REQUEST});
        try {
            const {data} = await getHeroes();
            dispatch({type: FETCH_HEROES_SUCCESS, payload: data})
        } catch (e) {
            console.log(e.message);
            dispatch({type: FETCH_HEROES_FAIL,payload: e.message})
        }
    }
}