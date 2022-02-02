import { RECEIVE_MONTH,
} from  '../constant'

export const dataMonth = ( state = [], action ) => {
switch(action.type){
case RECEIVE_MONTH:
return action.payload
default:
return state
}
}
