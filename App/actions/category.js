import { RECEIVE_CATEGORY } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getCategoryProfil = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_CATEGORY'))
		try {
			const response = await fetch(`${URL_API}Kategori/kategoriprofil`, {
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
			//   await console.log('result kategori', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveCategory(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_CATEGORY'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_CATEGORY'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_CATEGORY', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_CATEGORY'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_CATEGORY'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-CATEGORY'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-CATEGORY', e))
		}
	}
}

const receiveCategory = data => {
  return{
    type:RECEIVE_CATEGORY,
    payload:data
  }
}