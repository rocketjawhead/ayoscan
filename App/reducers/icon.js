import { RECEIVE_ICON,
} from  '../constant'

export const dataIcon = ( state = [], action ) => {
switch(action.type){
case RECEIVE_ICON:
return action.payload
default:
return state
}
}
