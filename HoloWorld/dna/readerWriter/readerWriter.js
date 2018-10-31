function genesis () {
  return true;
}

function validateCommit() {
  console.log("validateCommit()")
  return true
}

function validatePut() {
  console.log("validatePut()")
  return true
}

function holoTextWrite(text) {
	console.log("holoTextWrite("+text+")")
  var hash = commit('holoText', text);
	console.log("hash = "+hash)
  return hash;
}

function holoTextRead(hash) {
	console.log("holoTextRead("+hash+")")
  //var holoText = get(hash, { Local: true })
  var holoText = get(hash)
  return holoText
}