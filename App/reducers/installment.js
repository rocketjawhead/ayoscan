import { RECEIVE_ALL_INSTALLMENT, RECEIVE_ADD_INSTALL_MENT } from '../constant'

export const dataInstallment = ( state = [], action ) => {
  switch(action.type){
    case RECEIVE_ALL_INSTALLMENT:
      return action.payload
    default:
      return state
  }
}

export const dataAddInstallment = ( state = [], action ) => {
  switch(action.type){
    case RECEIVE_ADD_INSTALL_MENT:
      return action.payload
    default:
      return state
  }
}