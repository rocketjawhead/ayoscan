import { RECEIVE_TRANSACTIONS,RECEIVE_DEFISIT, RECEIVE_REMAINING_SALDO,
          } from  '../constant'

export const dataTrx = ( state = [], action ) => {
  switch(action.type){
    case RECEIVE_TRANSACTIONS:
      return action.payload
    default:
      return state
  }
}

export const dataDefisit = ( state = [], action ) =>{
  switch(action.type){
    case RECEIVE_DEFISIT:
      return action.payload
    default:
      return state
  }
}

export const dataRemaining = ( state = [], action ) => {
  switch(action.type){
    case RECEIVE_REMAINING_SALDO:
      return action.payload
    default:
      return state
  }
}