import { RECEIVE_BANK } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getBank = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_BANK'))
		try {
			const response = await fetch(`${URL_API}Rekening/getBank`, {
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
			//   await console.log('result bank', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveBank(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_BANK'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_BANK'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_BANK', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_BANK'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_BANK'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-BANK'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-BANK', e))
		}
	}
}

const receiveBank = data => {
  return{
    type:RECEIVE_BANK,
    payload:data
  }
}