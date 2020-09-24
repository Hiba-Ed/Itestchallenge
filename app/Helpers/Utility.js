module.exports = {
  usernameChecker(value) {
    if (/^[A-Za-z]+\d+$/.exec(value) === null) { 
      return 'Username unallowed' 
    }
    return 'Username allowed' 
  } 
}
