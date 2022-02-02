import { RECEIVE_MONTH } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getMonth = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_MONTH'))
		try {
			const response = await fetch(`${URL_API}Transaksi/getTrxDebitMonth`, {
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
			//   await console.log('result Month', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveMonth(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_MONTH'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_MONTH'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_MONTH', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_MONTH'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_MONTH'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-MONTH'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-MONTH', e))
		}
	}
}

const receiveMonth = data => {
  return{
    type:RECEIVE_MONTH,
    payload:data
  }
}