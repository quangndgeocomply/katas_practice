import {fizzbuzz} from '../index'

it("shouldReturnFizzIfTheNumberIsDividableBy3", () => {
   const a = fizzbuzz(3);
   expect(a).toBe('Fizz');
});

it("shouldReturnBuzzIfTheNumberIsDividableBy5", () => {
    const a = fizzbuzz(5);
    expect(a).toBe('Buzz');
 });

it("shouldReturnFizzBuzzIfTheNumberIsDividableBy15", () => {
    let a = fizzbuzz(15);
    expect(a).toBe('FizzBuzz');
    a = fizzbuzz(30);
    expect(a).toBe('FizzBuzz');
 });

it("shouldReturnTheSameNumberIfNoOtherRequirementIsFulfilled", () => {
    let a = fizzbuzz(1);
    expect(a).toBe(1);
    a = fizzbuzz(2);
    expect(a).toBe(2);
    a = fizzbuzz(4);
    expect(a).toBe(4);
 });
