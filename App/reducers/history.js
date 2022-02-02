import { RECEIVE_HISTORY,
} from  '../constant'

export const dataHistory = ( state = [], action ) => {
switch(action.type){
case RECEIVE_HISTORY:
return action.payload
default:
return state
}
}
