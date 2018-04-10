const Twitter = require('twitter-node-client').Twitter
const cors = require('micro-cors')()

const twitter = new Twitter({
  consumerKey: '6AnNhpNE7cyMpRaXzZuP9fGiA',
  consumerSecret: '8AWK14gGAioDBwGb2frt7cXILLyHyTvE4iWwCYriS5UPUKzhgD',
  accessToken: '120823722-4A1niNZ2XVGchQXaMpTpLYonKPG9kxVzVhpWV5nm',
  accessTokenSecret: '5CriAcvPoWXK6YWcAJOFs3Bbc2Xotb1u63wf7dtTu27uW',
  callBackUrl: '',
})

module.exports = (req, res) => {
    const url = req.url;
    const urlParams = url.split('&')
    const paramValues = []

    for (let i = 0; i < urlParams.length; i++) {
      paramValues.push(urlParams[i].split('=')[1]);
    }

    console.log('paramValues: ', paramValues)
    res.setHeader('Access-Control-Allow-Headers', 'access-control-allow-origin,allow-access-cross-origin')
    res.setHeader('access-control-allow-origin', '*')

    return new Promise(function (resolve, reject) {
      twitter.getCustomApiCall(
        '/search/tweets.json',
          { 'q': paramValues[0], count: '100', geocode: paramValues[1], result_type: paramValues[2]},
        function(error) {
          reject(error)
        },
        function(data) {
          resolve(data)
        }
      )
    })
}