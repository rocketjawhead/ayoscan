import { RECEIVE_ADD_CATEGORIES, RECEIVE_GET_CATEGORIES_DEFISIT } from '../constant'

export const dataAddCategoriesDefisit = ( state = [], action ) =>{
  switch(action.type){
    case RECEIVE_ADD_CATEGORIES:
      return action.payload
    default:
      return state
  }
}

export const dataCategoriesDefisit = ( state = [], action ) => {
  switch(action.type){
    case RECEIVE_GET_CATEGORIES_DEFISIT:
      return action.payload
    default:
      return state
  }
}