const rewire = require('rewire');
const expect = require('expect');

var app = rewire('./app');

describe('App (spies)', () =>{
    var db = {
        saveUser: expect.createSpy()
    };
    // hace un mock de la funcion saveUser()
    app.__set__('db', db);

    it('should call the spy correctly',()=>{
        var spy = expect.createSpy();
        spy('Mario', 39);
        expect(spy).toHaveBeenCalledWith('Mario', 39);
        /*spy();
        expect(spy).toHaveBeenCalled();*/
    });

    it ('should call saveUser with user object', ()=>{
        var email = 'test@test.com';
        var password = '123abc';
        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
});