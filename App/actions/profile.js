import { RECEIVE_GENDER,RECEIVE_JOB } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getGender = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_GENDER'))
		try {
			const response = await fetch(`${URL_API}Account/getGender`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				secretkey:id
        })
      })
			const responseStatus = await response
			  const dataRes = await response.json()
			//   await console.log('result list gender ', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveGender(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_GENDER'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_GENDER'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_GENDER', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_GENDER'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_GENDER'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-GENDER'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-GENDER', e))
		}
	}
}

const receiveGender = data => {
  return{
    type:RECEIVE_GENDER,
    payload:data
  }
}

//job
export const _getJob = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_JOB'))
		try {
			const response = await fetch(`${URL_API}Account/getJob`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
				secretkey:id
        })
      })
			const responseStatus = await response
			  const dataRes = await response.json()
			//   await console.log('result list job ', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveJob(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_JOB'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_JOB'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_JOB', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_JOB'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_JOB'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-JOB'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-JOB', e))
		}
	}
}

const receiveJob = data => {
  return{
    type:RECEIVE_JOB,
    payload:data
  }
}