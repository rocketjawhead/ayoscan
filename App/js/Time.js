import moment from 'moment'
import { AsyncStorage } from 'react-native'

function setTime(){
  const timeNow = moment().format('DD HH:mm:ss')
  const timeString = timeNow.toString()
  try{
    AsyncStorage.setItem('Time', timeString)
  }catch (error){
    console.log(error)
  }
}

function checkTime (){
  var currentTime = AsyncStorage.getItem('Time')
  var now = moment().format('DD HH:mm:ss')
  var startTime= moment(currentTime , "DD HH:mm:ss");
 console.log('current',startTime)
  var endTime= moment(now, "DD HH:mm:ss");
 console.log(endTime)
  var duration = moment.duration(endTime.diff(startTime));
 console.log('diff',duration)
  var hours = parseInt(duration.asHours());
 console.log('hours',hours)
  var minutes = parseInt(duration.asMinutes());
 console.log('minutes',minutes)
  var statusLock = hours >= 0 && minutes >= 15 ? 'Locked' : 'Unlocked'
  return statusLock
}

export { setTime, checkTime }
