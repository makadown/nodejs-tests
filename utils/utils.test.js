const expect = require('expect');
const utils = require('./utils');

// Behavior Driven development
it('should add two numbers', ( ) => {
    var res = utils.add(33,11);
    expect(res).toBe(44).toBeA('number');
});

it('should square one number', ( ) => {
    var res = utils.square(5);
    expect(res).toBe(25).toBeA('number');
});

it('should verify first and last names are set', ()=>{
    var usuario = utils.setName( {firstname: '', lastname: ''}, 'Mario Serrano' );
    expect(usuario).toInclude({firstname: 'Mario', lastname: 'Serrano'});
});
/*
it ('should expect some values', () => {
  // expect(12).toNotBe(11);
  // expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
  // expect([2,3,4]).toInclude(2);
  // expect([2,3,4]).toExclude(5);

  expect({
      name: 'Mario',
      age: 39,
      location: 'Mexicali'
  }).toInclude({age: 39});
});*/