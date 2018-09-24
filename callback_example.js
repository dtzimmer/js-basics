
function syncFunc() {
  return 'I finished as soon as I was called'
}

function asyncFunc() {
  setTimeout(function () {
    return 'I just barely finished'
  }, 5000);
}

function getSSNSync(state, outputData) {
  outputData()
}

function getSSNForState(state, outputData){
  setTimeout(function () {
    outputData()
  }, state.length *1000);
}

function asyncFuncWithCallback(timeToWait, myFancyCallback){
  setTimeout( function (){
    myFancyCallback(timeToWait)
  }, timeToWait * 1000);
}

function main(){
  console.log(asyncFunc())
  console.log(syncFunc())
  asyncFuncWithCallback(25, function (howLongDidYouWait) { console.log(`I waited: ${howLongDidYouWait}`)})
  asyncFuncWithCallback(8, (howLongDidYouWait) => { console.log(`I waited at least 8 seconds: ${howLongDidYouWait}`)})
  asyncFuncWithCallback(17, (howLongDidYouWait) => { console.log(`I waited: ${howLongDidYouWait}`)})

  getSSNForState('California', function() {console.log('finished with California')})
  getSSNForState('Utah', function() {console.log('finished with Utah')})
}

main()