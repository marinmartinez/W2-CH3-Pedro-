import { myLength, myPop } from "./sample.js";

describe("Giver", () => {
    test("Then it shoul..", () => {
        const array = [1, 2, 3];
        const result = myLength(array);
        const expectedResult = 3;
        expect(result).toBe(expectedResult);
    });
});
describe("Pop text", () => {
    test("Then it should to pop array.", () => {
        const array = [1, 2, 3];
        const result = myPop(array);
        const expectedResult = array.pop();
        expect(result).toBe(expectedResult);
    });
});
