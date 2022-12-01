import {search} from '../searchFunctionality/searchFunctionality'

it("should retrun empty when input length is less than 2", () => {
    const result = search("e");
    expect(result.length).toBe(0);
 });

 it("should retrun empty when input length is empty", () => {
    const result = search("");
    expect(result.length).toBe(0);
 });

 it("should retrun all cities when input is *", () => {
    const result = search("*");
    expect(result.length).toBe(4);
 });


it("should retrun budapest when input is pe", () => {
   const result = search("pe");
   expect(result[0]).toBe('budapest');
});

it("should retrun empty when input is abc", () => {
    const result = search("abc");
    expect(result.length).toBe(0);
 });