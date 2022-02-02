import { RECEIVE_REGISTER } from '../constant'
import { AsyncStorage } from 'react-native'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _doRegister = (data)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_REGISTER'))
		try {
			const response = await fetch(`${URL_API}User/register`, {
				method: 'POST',
				headers:{
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					secretkey : 'NOEL',
          			email     : data.email,
          			password  : data.password,
          			fullname  : data.fullname,
					username  : data.username,
					birthdate : data.birthdate
        })
	  })
	  await console.log('param register', body)
			const responseStatus = await response
      const dataRes = await response.json()
	//   await console.log('result register', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveRegister(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_REGISTER'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_REGISTER'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_REGISTER', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_REGISTER'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_REGISTER'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_REGISTER'))
			dispatch(setFailed(true, 'FAILED_PROCESS_REGISTER', e))
		}
	}
}

const receiveRegister = data => {
  return{
    type:RECEIVE_REGISTER,
    payload:data
  }
}