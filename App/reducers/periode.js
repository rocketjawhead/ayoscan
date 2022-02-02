import { RECEIVE_PERIODE,
} from  '../constant'

export const dataPeriode = ( state = [], action ) => {
switch(action.type){
case RECEIVE_PERIODE:
return action.payload
default:
return state
}
}
