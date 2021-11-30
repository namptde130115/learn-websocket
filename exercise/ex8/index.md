setImmediate() xử lý ở giai đoạn Check handlers

let count = 0
const cb = () => {
console.log(`Processing setImmediate cb ${++count}`)
setImmediate(cb)
}
setImmediate(cb)
setTimeout(() => console.log('setTimeout executed'), 100)
console.log('Start')

process.nextTick() xử lý ở giai đoạn bắt đầu 1 event loop hoặc giữa cái giai đoạn trong event loop. Sẽ giải quyết xong trước khi event loop tiếp tục

let count = 0
const cb = () => {
console.log(`Processing nextTick cb ${++count}`)
process.nextTick(cb)
}
setImmediate(() => console.log('setImmediate is called'))
setTimeout(() => console.log('setTimeout executed'), 100)
process.nextTick(cb)
console.log('Start')

=> cho nên trong trường hợp này a gọi trước b
