const containerClock = document.querySelector('.container-clock')

const getTime = () => {
    return {
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
        seconds: new Date().getSeconds()
    }
}

const formatTime = ({hour, minutes, seconds}) => {
    return {
        hour : String(hour).length===1?`0${hour}`:hour,
        minutes : String(minutes).length===1?`0${minutes}`:minutes,
        seconds : String(seconds).length===1?`0${seconds}`:seconds
    }
}

const insertTimeInDom = ({hour, minutes, seconds}) => {
    containerClock.innerHTML =`<span class ="digit-container">${hour}</span>
    <span class ="digit-container">${minutes}</span>
    <span class ="digit-container">${seconds}</span>`
}


setInterval(() => {
    const instant = getTime()
    const formatedTime = formatTime(instant)
    insertTimeInDom(formatedTime)
}, 1000)
