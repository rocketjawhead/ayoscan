import { RECEIVE_UPGRADE,
} from  '../constant'

export const dataUpgrade = ( state = [], action ) => {
switch(action.type){
case RECEIVE_UPGRADE:
return action.payload
default:
return state
}
}
