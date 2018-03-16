function pangram (s) {
  // Complete this function
  var letters = 'zqxjkvbpygfwmucldrhsnioate'
  s = s.toLowerCase().replace(/[^a-z]/g, '')
  for (var i = 0; i < 26; i++) { if (s.indexOf(letters[i]) < 0) return 'not pangram' }
  return 'pangram'
}
