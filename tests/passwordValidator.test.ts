import {passwordValidator} from '../passwordFieldInputValidation/passwordValidator'

it("should return Password must contain at least one capital letter", () => {
   const result = passwordValidator("ab@1123123123");
   expect(result.passed).toBeFalsy;
   expect(result.messages[0]).toBe("password must contain at least one capital letter")
});

it("should return Password must contain at least one number", () => {
    const result = passwordValidator("ab@Aaaaaaaaaaa");
    expect(result.passed).toBeFalsy;
    expect(result.messages[0]).toBe("password must contain at least one number")
 });

 it("should return Password must contain at least one special character", () => {
    const result = passwordValidator("ab1Aaaaaaaaaaa");
    expect(result.passed).toBeFalsy;
    expect(result.messages[0]).toBe("password must contain at least one special character")
 });

 it("should return Password must be at least 8 characters", () => {
    const result = passwordValidator("ab1A@");
    expect(result.passed).toBeFalsy;
    expect(result.messages[0]).toBe("Password must be at least 8 characters")
 });

 it("should return Password must be at least 8 characters and  Password must contain at least one special character", () => {
    const result = passwordValidator("ab1A");
    expect(result.passed).toBeFalsy;
    expect(result.messages[1]).toBe("Password must be at least 8 characters")
    expect(result.messages[0]).toBe("password must contain at least one special character")
 });

 it("should return True", () => {
    const result = passwordValidator("ab@1aaaaa1A");
    expect(result.passed).toBeTruthy;
    expect(result.messages.length).toBe(0)
 });