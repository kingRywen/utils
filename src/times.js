export const throttle = (fn, interval) => {
  let timer,
      isFirst = true
  return function () {
    if (isFirst) {
      isFirst = false
      fn.apply(null, arguments)
    }
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      clearTimeout(timer)
      timer = null
      fn.apply(null, arguments)
    }, interval);
  }
}