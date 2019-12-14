import {getHeroes, deleteHeroById} from './hero-service'

/* actions types */
export const FETCH_HEROES_REQUEST = "FETCH_HEROES_REQUEST";
export const FETCH_HEROES_SUCCESS = "FETCH_HEROES_SUCCESS";
export const FETCH_HEROES_FAIL = "FETCH_HEROES_FAIL";

export const DELETE_HERO_REQUEST = "DELETE_HERO_REQUEST";
export const DELETE_HERO_SUCCESS = "DELETE_HERO_SUCCESS";
export const DELETE_HERO_FAIL = "DELETE_HERO_FAIL";

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

export const removeHeroById = (id) => {
    return async dispatch => {
        dispatch({type:DELETE_HERO_REQUEST});
        try {
            deleteHeroById(id);
            dispatch({type:DELETE_HERO_SUCCESS}, payload: id)
        } catch (e) {
            console.log(e.message);
            dispatch({type:DELETE_HERO_FAIL})
        }
    }
}