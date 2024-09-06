let counter = 1

function timeCalc() {
    setTimeout(() => {
        counter++
        console.log(counter)
        timeCalc()
    }, 1000)
}


timeCalc()