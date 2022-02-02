import { RECEIVE_BANK,
} from  '../constant'

export const dataBank = ( state = [], action ) => {
switch(action.type){
case RECEIVE_BANK:
return action.payload
default:
return state
}
}
