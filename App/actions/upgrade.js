import { RECEIVE_UPGRADE } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getUpgrade = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_UPGRADE'))
		try {
			const response = await fetch(`${URL_API}Apperance/infopaid`, {
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
			//   await console.log('result upgrade', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveUpgrade(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_UPGRADE'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_UPGRADE'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_UPGRADE', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_UPGRADE'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_UPGRADE'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-UPGRADE'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-UPGRADE', e))
		}
	}
}

const receiveUpgrade = data => {
  return{
    type:RECEIVE_UPGRADE,
    payload:data
  }
}