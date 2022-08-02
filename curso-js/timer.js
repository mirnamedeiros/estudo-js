const schedule = require('node-schedule')

const task1 = schedule.scheduleJob('*/5 * * * * *', function() {
    console.log('Executing Task 1!', new Date().getSeconds())
})

setTimeout( function() {
    task1.cancel()
    console.log('Task 1 Canceled!')
},20000)