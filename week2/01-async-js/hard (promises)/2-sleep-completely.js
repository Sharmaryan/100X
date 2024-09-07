/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {

    var date = new Date();
    while ((new Date()) - date <= milliseconds) { }
    return new Promise((resolve) => {
        return resolve()
    })
    console.log('thread started')
}

module.exports = sleep;
