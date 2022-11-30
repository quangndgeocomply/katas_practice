import { Result } from "./result";

function isUppercaseCharacterPresent(password: string): boolean {
    return /[A-Z]/g.test(password);
}

function isNumberPresent(password: string): boolean {
    return /[0-9]/g.test(password);
}

function isSpecialCharacterPresent(password: string): boolean {
    return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password);
}

function isLengthBiggerThan8(password: string): boolean {
    return password.length >= 8 ? true : false;
}
export function passwordValidator(pass: string): Result {
    let messages: Array<string> = [];
    let passed: boolean = false;
    if (!isUppercaseCharacterPresent(pass)) {
        messages.push("password must contain at least one capital letter")
    }
    if (!isNumberPresent(pass)) {
        messages.push("password must contain at least one number")
    }
    if (!isSpecialCharacterPresent(pass)) {
        messages.push("password must contain at least one special character")
    }
    if (!isLengthBiggerThan8(pass)) {
        messages.push("Password must be at least 8 characters")
    }
    passed = messages.length > 0 ? false : true;
    return {
        passed,
        messages
    };
}