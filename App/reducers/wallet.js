import { RECEIVE_WALLET,
} from  '../constant'

export const dataWallet = ( state = [], action ) => {
switch(action.type){
case RECEIVE_WALLET:
return action.payload
default:
return state
}
}
