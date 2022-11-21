// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test("Checking valid number 111-111-1111", () => {
    expect(functions.isPhoneNumber("111-111-1111")).toBe(true);
});
test("Checking valid number 123-456-7890", () => {
    expect(functions.isPhoneNumber("123-456-7890")).toBe(true);
});
test("Checking invalid number 42-42-564", () => {
    expect(functions.isPhoneNumber("42-42-564")).toBe(false);
});
test("Checking invalid number 777-777-777", () => {
    expect(functions.isPhoneNumber("777-777-777")).toBe(false);
});

test("Checking valid email coder@gmail.com", () => {
    expect(functions.isEmail("coder@gmail.com")).toBe(true);
});
test("Checking valid email user@website.cg", () => {
    expect(functions.isEmail("user@website.cg")).toBe(true);
});
test("Checking invalid email singin'intherain@movies.com", () => {
    expect(functions.isEmail("singin'intherain@movies.com")).toBe(false);
});
test("Checking invalid email a@a.a", () => {
    expect(functions.isEmail("a@a.a")).toBe(false);
});

test("Checking valid password four", () => {
    expect(functions.isStrongPassword("four")).toBe(true);
});
test("Checking valid password a_5_star_psswrd", () => {
    expect(functions.isStrongPassword("a_5_star_psswrd")).toBe(true);
});
test("Checking invalid password Chapter_7_Bankruptcy", () => {
    expect(functions.isStrongPassword("chapter_7_bankruptcy")).toBe(false);
});
test("Checking invalid password 9", () => {
    expect(functions.isStrongPassword("9")).toBe(false);
});

test("Checking valid date 11/29/2001", () => {
    expect(functions.isDate("11/29/2001")).toBe(true);
});
test("Checking valid date 12/25/2022", () => {
    expect(functions.isDate("12/25/2022")).toBe(true);
});
test("Checking invalid date 1", () => {
    expect(functions.isDate("1")).toBe(false);
});
test("Checking invalid date aa/aa/aaaa", () => {
    expect(functions.isDate("aa/aa/aaaa")).toBe(false);
});

test("Checking valid hex color #FFF", () => {
    expect(functions.isHexColor("#FFF")).toBe(true);
});
test("Checking valid hex color #A1A1A1", () => {
    expect(functions.isHexColor("#A1A1A1")).toBe(true);
});
test("Checking invalid hex color #ZZZ", () => {
    expect(functions.isHexColor("#ZZZ")).toBe(false);
});
test("Checking invalid hex color #13579", () => {
    expect(functions.isHexColor("#13579")).toBe(false);
});