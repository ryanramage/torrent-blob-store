var torrents = require('./')

var store = torrents()

var rs = store.createReadStream({
  link: 'magnet:?xt=urn:btih:ef330b39f4801d25b4245212e75a38634bfc856e',
  index: 1
})

rs.on('data', function(data) {
  console.log('received', data)
})

rs.on('end', function() {
  console.log('(no more data)')
})