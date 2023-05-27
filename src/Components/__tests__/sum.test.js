import sum from "../sum";


// This is normal js unit testing:
test("check sum of two positive numbers", () => {
    expect(sum(3,3)).toBe(6);
})

