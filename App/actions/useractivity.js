import { RECEIVE_ACTIVITY } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _addUserActivity = (data)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_ACTIVITY'))
		try {
			const response = await fetch(`${URL_API}User/userActivity`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				user_id:data.user_id,
				title_page:data.title_page,
				id_blog:data.id_blog,
				id_ref_source:data.id_ref_source,
				secretkey:'NOEL'
        })
      })
			const responseStatus = await response
			  const dataRes = await response.json()
			//   await console.log('result save user activity', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveUserActivity(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_ACTIVITY'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_ACTIVITY'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_ACTIVITY', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_ACTIVITY'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_ACTIVITY'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-ACTIVITY'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-ACTIVITY', e))
		}
	}
}

const receiveUserActivity = data => {
  return{
    type:RECEIVE_ACTIVITY,
    payload:data
  }
}