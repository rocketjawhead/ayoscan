import { RECEIVE_POIN } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getHistoryPoin = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_POIN'))
		try {
			const response = await fetch(`${URL_API}Poin/redeemhistory`, {
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
			//   await console.log('result history poin', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receivePoin(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_POIN'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_POIN'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_POIN', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_POIN'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_POIN'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-POIN'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-POIN', e))
		}
	}
}

const receivePoin = data => {
  return{
    type:RECEIVE_POIN,
    payload:data
  }
}