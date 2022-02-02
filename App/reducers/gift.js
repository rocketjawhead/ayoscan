import { RECEIVE_GIFT,
} from  '../constant'

export const dataGift = ( state = [], action ) => {
switch(action.type){
case RECEIVE_GIFT:
return action.payload
default:
return state
}
}
