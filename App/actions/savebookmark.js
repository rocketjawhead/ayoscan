import { RECEIVE_SAVE_BOOKMARK } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'


//bookmark

//getsavebookmark
export const _getSaveBookmark = (data)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_SAVE_BOOKMARK'))
		try {
			const response = await fetch(`${URL_API}Blog/getSaveBookmark`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
                secretkey:'NOEL',
                user_id:data.user_id
        })
      })
			const responseStatus = await response
			  const dataRes = await response.json()
			//   await console.log('result save bookmark action', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveSaveBookmark(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_SAVE_BOOKMARK'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_SAVE_BOOKMARK'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_SAVE_BOOKMARK', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_SAVE_BOOKMARK'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_SAVE_BOOKMARK'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-SAVE_BOOKMARK'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-SAVE_BOOKMARK', e))
		}
	}
}

const receiveSaveBookmark = data => {
  return{
    type:RECEIVE_SAVE_BOOKMARK,
    payload:data
  }
}