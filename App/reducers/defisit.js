import { RECEIVE_ADD_DEFISIT } from '../constant'

export const dataAddDefisit = ( state = [], action ) =>{
  switch(action.type){
    case RECEIVE_ADD_DEFISIT:
      return action.payload
    default:
      return state
  }
}