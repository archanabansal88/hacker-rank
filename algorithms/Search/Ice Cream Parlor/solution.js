
function icecreamParlor (m, arr) {
  // Complete this function
  let sum = 0
  let smallid, largeid
  let ar = []
  for (let i = 0; i < arr.length; i++) {
    	for (let j = i + 1; j < arr.length; j++) {
    		sum = arr[i] + arr[j]
    		if (sum === m) {
    			smallid = i + 1
    			largeid = j + 1
    			ar.push(smallid, largeid)
    			break
    		} else {
    			sum = 0
    		}
    	}
  }
  return ar
}
