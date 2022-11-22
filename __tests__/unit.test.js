// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//PhoneNumber unit tests
test('tests number (800) 588 2300', () => {
    expect(functions.isPhoneNumber('(800)588-2300')).toBe(true);
  });
  test('tests number (800) 267 2001', () => {
    expect(functions.isPhoneNumber('(800)267-2001')).toBe(true);
  });
  test('tests number 6969', () => {
    expect(functions.isPhoneNumber('6969')).toBe(false);
  });
  test('tests number 8', () => {
    expect(functions.isPhoneNumber('8')).toBe(false);
  });

//Email unit tests
  test('tests email fake@ucsd.edu', () => {
    expect(functions.isEmail('fake@ucsd.edu')).toBe(true);
  });
  test('tests email mail@ucsd.edu', () => {
    expect(functions.isEmail('mail@ucsd.edu')).toBe(true);
  });
  test('tests email fake@ucsd', () => {
    expect(functions.isEmail('fake@ucsd')).toBe(false);
  });
  test('tests email fakemail', () => {
    expect(functions.isEmail('fakemail')).toBe(false);
  });

//Password unit tests
  test('tests password Goodtest1', () => {
    expect(functions.isStrongPassword('Goodtest1')).toBe(true);
  });
  test('tests password better_Test1', () => {
    expect(functions.isStrongPassword('better_Test1')).toBe(true);
  });
  test('tests password 1', () => {
    expect(functions.isStrongPassword('1')).toBe(false);
  });
  test('tests password not', () => {
    expect(functions.isStrongPassword('not')).toBe(false);
  });

//Date unit tests
  test('tests date 11/21/2022', () => {
    expect(functions.isDate('11/21/2022')).toBe(true);
  });
  test('tests date 12/07/2022', () => {
    expect(functions.isDate('12/07/2022')).toBe(true);
  });
  test('tests date 12/071/2022', () => {
    expect(functions.isDate('12/071/2022')).toBe(false);
  });
  test('tests date 122/07/2022', () => {
    expect(functions.isDate('122/07/2022')).toBe(false);
  });

//Hex unit tests
  test('tests hex value f54260', () => {
    expect(functions.isHexColor('f54260')).toBe(true);
  });
  test('tests hex value 4619cf', () => {
    expect(functions.isHexColor('4619cf')).toBe(true);
  });
  test('tests hex value b', () => {
    expect(functions.isHexColor('b')).toBe(false);
  });
  test('tests hex value 09', () => {
    expect(functions.isHexColor('09')).toBe(false);
  });