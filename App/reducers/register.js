import { RECEIVE_REGISTER } from  '../constant'

export const resRegister = ( state = [], action ) => {
  switch(action.type){
    case RECEIVE_REGISTER:
      return action.payload
    default:
      return state
  }
}