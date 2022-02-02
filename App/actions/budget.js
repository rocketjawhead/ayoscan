import { RECEIVE_BUDGET } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getBudget = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_BUDGET'))
		try {
			const response = await fetch(`${URL_API}Budget/getbudget`, {
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
			//   await console.log('result budget', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveBudget(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_BUDGET'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_BUDGET'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_BUDGET', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_BUDGET'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_BUDGET'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-BUDGET'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-BUDGET', e))
		}
	}
}

const receiveBudget = data => {
  return{
    type:RECEIVE_BUDGET,
    payload:data
  }
}