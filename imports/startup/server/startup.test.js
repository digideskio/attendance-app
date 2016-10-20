import { resetDatabase } from 'meteor/xolvio:cleaner';
import chai, { expect } from 'meteor/practicalmeteor:chai';

// Things to read before getting in too deep
// http://chaijs.com/guide/styles/#expect
// http://chaijs.com/api/bdd/

// on the CLI launch with 
// meteor test --driver-package=practicalmeteor:mocha 

describe('reset the DB', function () {
  beforeEach(function () {
    resetDatabase();
  });
});

describe('SERVER STARTUP my simple EXPECT suite', function () {

  it('this test should always pass', function () {
    let atest = true
    expect(atest).to.equal(true)
  })
  
  it('this test should always pass as well', function () {
    let atest = true
    expect(atest).not.to.equal(false)
  })

  it('this test should always fail', function () {
    let atest = true
    expect(atest).to.equal(false)
  })

})
