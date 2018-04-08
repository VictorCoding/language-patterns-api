const Twitter = require('twitter-node-client').Twitter

const twitter = new Twitter({
  consumerKey: '6AnNhpNE7cyMpRaXzZuP9fGiA',
  consumerSecret: '8AWK14gGAioDBwGb2frt7cXILLyHyTvE4iWwCYriS5UPUKzhgD',
  accessToken: '120823722-4A1niNZ2XVGchQXaMpTpLYonKPG9kxVzVhpWV5nm',
  accessTokenSecret: '5CriAcvPoWXK6YWcAJOFs3Bbc2Xotb1u63wf7dtTu27uW',
  callBackUrl: '',
})

module.exports = (req, res) => {
    return new Promise(function (resolve, reject) {
      twitter.getCustomApiCall(
        '/search/tweets.json',
          { 'q': 'hacer', count: '100', geocode: '25.9369056,-97.4821958,5mi'},
        function(error) {
          reject(error)
        },
        function(data) {
          resolve(data)
        }
      )
    })
}