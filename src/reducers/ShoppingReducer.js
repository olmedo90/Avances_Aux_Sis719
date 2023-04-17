
import { Types } from '../types/Types';
import ShoppingMovie from '../components/ShoppingMovie/index';

export const stateInitial={
    shoppingMovie:[]
}

export const shoppingReducer =(state, action) => {
    console.log("🚀 ~ file: ShoppingReducer.js:11 ~ shoppingReducer ~ state:", state)
    const {type,payload}=action;
    const {shoppingMovie}=state;
    switch (type) {
        case Types.ADD_TO_SHOPPING:{
        const newShopping = [...shoppingMovie,payload ]
            return{
                ...state,
                shoppingMovie: newShopping
            }

        }
        case Types.REMOVE_SHOPPING :{
            return {
                ...state,
                shoppingMovie: shoppingMovie.filter((item)=> item.id !==payload)
            }
        }
        case Types.CLEAN_SHOPPING :{
            return {
                ...state,
                shoppingMovie:[]
            }
        }
           
            
    
        default:
            break;
    }
}