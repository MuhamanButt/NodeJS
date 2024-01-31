//! index.js
// Event Loop - Execution Order
// 1. Any callbacks in the micro task queues are executed. First, tasks in the nextTick queue and only then tasks in the promise queue
// 2. All callbacks within the timer queue are executed
// 3. Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue
// 4. All callbacks within the I/O queue are executed
// 5. Callbacks in the micro task queues if present are executed. nextTick queue followed by Promise queue.
// 6. All callbacks in the check queue are executed
// 7. Callbacks in the micro task queues if present are executed. Again, first tasks in the nextTick queue and then tasks in the promise queue
// 8. All callbacks in the close queue are executed
// 9. For one final time in the same loop, the micro task queues are executed. nextTick queue followed by promise queue.




const fs = require("fs")
fs.readFile(__filename,()=>{
  console.log("this is readFile 1")
  setImmediate(()=>console.log('this is setImmediate inside read file'))
  process.nextTick(()=>console.log('this is nexttixk inside readfile'))
  Promise.resolve().then(()=>console.log('this is promise inside readFile'))
})

process.nextTick(()=>console.log('this is process.nextTick 1'))
Promise.resolve().then(()=>console.log('this is promise.resolve 1'))
setTimeout(() => {
  console.log('this is setTimeout 1')
}, 0);

setImmediate(()=>console.log('this is setImmediate'))