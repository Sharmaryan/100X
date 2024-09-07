// setInterval(() => {
//     const date = new Date()
//     const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
//     console.log(formattedTime)
// }, 1000)

// with am/pm
const NINE = 9
setInterval(() => {
    const date = new Date()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
    const getTimeWithClockSystem = (clockSystem) => {
        return `${hour}:${minute <= NINE ? '0' + minute : minute}:${second <= NINE ? '0' + second : second} ${clockSystem}`
    }
    console.log(hour >= 12 && minute >= 0 ? getTimeWithClockSystem('pm') : getTimeWithClockSystem('am'))
}, 1000)