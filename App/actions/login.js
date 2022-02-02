import { RECEIVE_LOGIN } from '../constant'
import { AsyncStorage } from 'react-native'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API,SECRET_KEY,VERSION_APP } from '../env'

export const _doLogin = (data)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_LOGIN'))
		try {
			const response = await fetch(`${URL_API}User/login`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body:JSON.stringify({
          email: data.email,
		  password :data.password,
		  secretkey:'demopay',
		  version_app:VERSION_APP
        })
      })
      const responseStatus = await response
			const dataLogin = await response.json()
			await console.log('result login', dataLogin)
			if (responseStatus.status == 200 ) {
        await dispatch(saveSession(JSON.stringify(dataLogin.Data)))
				await dispatch(receiveLogin(dataLogin))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_LOGIN'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_LOGIN'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_LOGIN'))
			dispatch(setFailed(true, 'FAILED_PROCESS_LOGIN', e))
		}
	}
}

const saveSession = data => {
	return () => {
		AsyncStorage.setItem('session', data)
	}
}

const receiveLogin = data => {
  return{
    type:RECEIVE_LOGIN,
    payload:data
  }
}


export const clearData = () => {
	return{
		type: LOG_OUT 
	}
}