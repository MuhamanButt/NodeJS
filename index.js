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

setTimeout(() => {
  console.log("this is setTimerout 1");
}, 0);
setTimeout(() => {
  console.log("this is setTimerout 2");
  Promise.resolve().then(() => console.log("this is promise.resolve inside setTimeout"));
  process.nextTick(() => console.log("this is nextTick inside setTimeout"));
}, 0);
setTimeout(() => {
  console.log("this is setTimerout 3");
}, 0);

process.nextTick(() => console.log("this is process.NextTick 1"));
process.nextTick(() => {
  console.log("this is process.NextTick 2");
  process.nextTick(() =>
    console.log("this is inner next tick inside next tick")
  );
});
process.nextTick(() => console.log("this is process.NextTick 3"));

Promise.resolve().then(() => console.log("this is promise.resolve 1"));
Promise.resolve().then(() => {
  console.log("this is Promise.resolve 2");
  process.nextTick(() =>
    console.log("this is the inner next tik inside promise then block")
  );
});
