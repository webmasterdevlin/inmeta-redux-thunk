import * as types from './hero-actions';
const initialState = {
    heroes: [],
    hero: {id: '',
        firstName: '',
        lastName: '',
        house: '',
        knownAs: ''},
    isLoading: false,
}
export const heroReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_HEROES_REQUEST:
            return {...state, isLoading: true}
        case types.FETCH_HEROES_SUCCESS:
            return {...state, isLoading: false, heroes: action.payload }
        case types.FETCH_HEROES_FAIL:
            return {...state, isLoading: false}
        case types.DELETE_HERO_REQUEST:
            return {...state, isLoading:true}
        case types.DELETE_HERO_SUCCESS:
            return {...state, isLoading: false, 
            heroes: state.heroes.filter(h => h.id !== action.payload)}
        case types.DELETE_HERO_FAIL:
            return {...state, isLoading: false}
        case types.ADD_HERO_REQUEST:
            return {...state, isLoading: true}
        case types.ADD_HERO_SUCCESS:
            return {...state, isLoading: false, 
            heroes: [...state.heroes, action.payload]}
        case types.ADD_HERO_FAIL:
            return {...state, isLoading: false}

        default:
            return state;
    }
}