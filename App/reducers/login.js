import { RECEIVE_LOGIN} from  '../constant'

export const resLogin = ( state = [], action ) => {
  switch(action.type){
    case RECEIVE_LOGIN:
      return action.payload
    default:
      return state
  }
}