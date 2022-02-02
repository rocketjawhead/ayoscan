import { RECEIVE_PROMO,
} from  '../constant'

export const dataPromo = ( state = [], action ) => {
switch(action.type){
case RECEIVE_PROMO:
return action.payload
default:
return state
}
}
