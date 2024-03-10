
const { default: testFunc } = await import("../");

describe("check if something is a css hex color code", () => {
    test("nothing", async () => {
        expect(testFunc()).toEqual(false);
    });

    test("boolean", async () => {
        expect(testFunc(true)).toEqual(false);
    });

    test("a number", async () => {
        expect(testFunc(123)).toEqual(false);
    });

    test("an invalid string", async () => {
        expect(testFunc("foo")).toEqual(false);
    });

    test("invalid length", async () => {
        expect(testFunc("#abcde")).toEqual(false);
    });

    test("short form", async () => {
        expect(testFunc("#abc")).toEqual(true);
    });

    test("short form with alpha", async () => {
        expect(testFunc("#abcd")).toEqual(true);
    });

    test("long form", async () => {
        expect(testFunc("#123456")).toEqual(true);
    });

    test("long form with alpha", async () => {
        expect(testFunc("#12345678")).toEqual(true);
    });
});
