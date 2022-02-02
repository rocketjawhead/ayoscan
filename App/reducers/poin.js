import { RECEIVE_POIN,
} from  '../constant'

export const dataPoin = ( state = [], action ) => {
switch(action.type){
case RECEIVE_POIN:
return action.payload
default:
return state
}
}
