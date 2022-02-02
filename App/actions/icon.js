import { RECEIVE_ICON } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getIcon = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_ICON'))
		try {
			const response = await fetch(`${URL_API}Apperance/getIcon`, {
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
			//   await console.log('result icon', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveIcon(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_ICON'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_ICON'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_ICON', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_ICON'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_ICON'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-ICON'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-ICON', e))
		}
	}
}

const receiveIcon = data => {
  return{
    type:RECEIVE_ICON,
    payload:data
  }
}