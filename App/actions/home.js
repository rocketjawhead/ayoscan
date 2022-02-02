import { RECEIVE_TRANSACTIONS, RECEIVE_DEFISIT, RECEIVE_REMAINING_SALDO, } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getTrx = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_TRX'))
		try {
			const response = await fetch(`${URL_API}Transaksi/getTransaksi`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				  ewalletcode:id,
				  secretkey:'NOEL'
        })
      })
			const responseStatus = await response
	  const dataRes = await response.json()
	//   await console.log('result history', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveTrx(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_TRX'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_TRX'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_TRX', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_TRX'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_TRX'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-TRX'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-TRX', e))
		}
	}
}

const receiveTrx = data => {
  return{
    type:RECEIVE_TRANSACTIONS,
    payload:data
  }
}

export const _getDefisit = (id) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_DEFISIT'))
		try {
			const response = await fetch(`${URL_API}Transaksi/amountall`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				  ewalletcode:id,
				  secretkey:'NOEL'
        })
      })
			const responseStatus = await response
      const dataRes = await response.json()
			if (responseStatus.status == 200 ) {
				await dispatch(receiveDefisit(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_DEFISIT'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_DEFISIT'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_DEFISIT', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_DEFISIT'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_DEFISIT'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET_DEFISIT'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET_DEFISIT', e))
		}
	}
}

const receiveDefisit = data => {
  return{
    type:RECEIVE_DEFISIT,
    payload:data
  }
}

export const _getRemainSaldo = (id) => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_REMAINING_DATA'))
		try {
			const response = await fetch(`${URL_API}Transaksi/remainData`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
          user_id:id
        })
      })
			const responseStatus = await response
      const dataRes = await response.json()
			if (responseStatus.status == 200 ) {
				await dispatch(receiveRemaining(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_REMAINING_DATA'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_REMAINING_DATA'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_REMAINING_DATA', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_REMAINING_DATA'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_REMAINING_DATA'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET_REMAINING_DATA'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET_REMAINING_DATA', e))
		}
	}
}

const receiveRemaining = data => {
  return{
    type:RECEIVE_REMAINING_SALDO,
    payload:data
  }
}