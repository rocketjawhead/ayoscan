import { combineReducers } from 'redux'

import { loading, failed, success } from './processor'
import { resLogin } from './login'
import { resRegister } from './register'
import { dataTrx, dataDefisit, dataRemaining, } from './home'
import { dataAddDefisit } from './defisit'
import { dataGrafik } from './expanses'
import { dataAddCategoriesDefisit,dataCategoriesDefisit } from './categories'
import { dataInstallment, dataAddInstallment } from './installment'

//new function
import { dataPromo } from './promo'
import { dataBlog,dataBlogSlider,
  dataBlogDashboard,dataBookmark,
  dataAddBookmark,dataDeleteBookmark } from './blog'
import { dataHistory } from './history'
import { dataIncome } from './income'
import { dataOutcome } from './outcome'
import { dataDelete } from './income'
import { dataUserActivity } from './useractivity'
import { dataGender,dataJob } from './profile'
import { dataSaveBookmark } from './saveBookmark'
import { dataWallet } from './wallet'
import { dataColor } from './color'
import { dataIcon } from './icon'
import { dataRekening } from './rekening'
import { dataBank } from './bank'
import { dataCicilan,dataCicilanProfil } from './cicilan'
import { dataBudget } from './budget'
import { dataPeriode } from './periode'
import { dataMonth } from './month'
import { dataUpgrade } from './upgrade'
import { dataCategory } from './category'
import { dataGift } from './gift'
import { dataPoin } from './poin'
import { dataSummary } from './summary'
import { dataMessage } from './message'
//

const appReducers = combineReducers({
  loading, failed, success, resLogin, resRegister, dataTrx,
  dataRemaining, dataDefisit, dataAddDefisit, dataGrafik,
  dataAddCategoriesDefisit, dataCategoriesDefisit, dataInstallment,
  dataAddInstallment,dataPromo,dataBlog,dataHistory,dataIncome,dataOutcome,
  dataDelete,dataBlogSlider,dataUserActivity,dataBlogDashboard,dataBookmark,
  dataAddBookmark,dataDeleteBookmark,dataGender,dataJob,dataSaveBookmark,dataWallet,
  dataColor,dataIcon,dataRekening,dataBank,dataCicilan,dataBudget,dataPeriode,dataMonth,
  dataUpgrade,dataCategory,dataCicilanProfil,dataGift,dataPoin,dataSummary,dataMessage
})

export default appReducers