const compiler = require('../lib')
const res = compiler.compile(
  `
<current-user>ABCD</current-user>
`, {
    resourcePath: '/User/fxy/Documents/test.wxml',
    isReservedTag: function (tag) {
      return true
    },
    getTagNamespace () {
      return false
    },
    mp: {
      platform: 'app-plus'
    },
    filterModules: ['swipe'],
    service: true
    // view: true

  })
console.log(require('util').inspect(res, {
  colors: true,
  depth: null
}))
