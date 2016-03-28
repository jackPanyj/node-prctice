//每个button绑定click事件
;[].forEach.call(document.querySelector('a'), function (ele, index) {
  ele.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(index)
  })
})

// 将类数组对象换成数组
[].slice.call({0: 'java', 1: 'php', length: 2}) // ['java', 'php']

// 获取数组中的最大值
Math.max.apply(null, [1, 2, 3, 5, 7]) // 7
