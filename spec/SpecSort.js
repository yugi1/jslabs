describe("sorting", () => {
    it("finds min value", () => {
        let actual = sort();
        expect(actual).toBe("1, 2, 3, 4, 5")
    });
});
describe("swap", () => {
    it("swaps min value with first position", () => {
        let actual1 = sort();
        expect(actual1).toBe("1, 2, 3, 4, 5")
    });
});