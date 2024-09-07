setInterval(() => {
    const date = new Date()
    const formattedTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    console.log(formattedTime)
}, 1000)