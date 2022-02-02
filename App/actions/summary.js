import { RECEIVE_SUMMARY } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getSummary = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_SUMMARY'))
		try {
			const response = await fetch(`${URL_API}Transaksi/getsummary`, {
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
			//   await console.log('result summary', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveSummary(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_SUMMARY'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_SUMMARY'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_SUMMARY', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_SUMMARY'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_SUMMARY'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-SUMMARY'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-SUMMARY', e))
		}
	}
}

const receiveSummary = data => {
  return{
    type:RECEIVE_SUMMARY,
    payload:data
  }
}