'use strict'

const { test } = use('Test/Suite')('Username Checker')
const Utility = use('Utility')

test('checking invalid username', async ({ assert }) => {
  const response = Utility.usernameChecker('ad')
  assert.deepEqual(response, 'Username unallowed'
  )
})
test('checking valid username' , async( {assert} )=>{
  const response = Utility.usernameChecker('goodpas11')
  assert.deepEqual(response, 'Username allowed' 
  )
})