import { RECEIVE_CICILAN,RECEIVE_CICILAN_PROFIL } from '../constant'
import { setFailed, setLoading, setSuccess } from './processor'
import { URL_API } from '../env'

export const _getCicilan = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_CICILAN'))
		try {
			const response = await fetch(`${URL_API}Cicilan/listcicilan`, {
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
			//   await console.log('result Cicilan', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveCicilan(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_CICILAN'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_CICILAN'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_CICILAN', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_CICILAN'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_CICILAN'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-CICILAN'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-CICILAN', e))
		}
	}
}

const receiveCicilan = data => {
  return{
    type:RECEIVE_CICILAN,
    payload:data
  }
}


//cicilan profil
export const _getCicilanProfil = (id)  => {
	return async dispatch => {
		await dispatch(setLoading(true, 'LOADING_PROCESS_GET_CICILAN_PROFIL'))
		try {
			const response = await fetch(`${URL_API}Cicilan/listcicilanprofil`, {
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
			  await console.log('result Cicilan profil', dataRes)
			if (responseStatus.status == 200 ) {
				await dispatch(receiveCicilanProfil(dataRes))
				await dispatch(setSuccess(true, 'SUCCESS_PROCESS_GET_CICILAN_PROFIL'))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_CICILAN_PROFIL'))
			} else {
				await dispatch(setFailed(true, 'FAILED_PROCESS_GET_CICILAN_PROFIL', data.message))
				await dispatch(setLoading(false, 'LOADING_PROCESS_GET_CICILAN_PROFIL'))
				await dispatch(setFailed(false, 'FAILED_PROCESS_GET_CICILAN_PROFIL'))
			}
		} catch (e){
			dispatch(setLoading(false, 'LOADING_PROCESS_GET-CICILAN-PROFIL'))
			dispatch(setFailed(true, 'FAILED_PROCESS_GET-CICILAN-PROFIL', e))
		}
	}
}

const receiveCicilanProfil = data => {
  return{
    type:RECEIVE_CICILAN_PROFIL,
    payload:data
  }
}