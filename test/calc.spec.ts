describe("Calc", () => {
  it.concurrent("should wait 2 seconds", () => {
    expect(2 + 2).toEqual(4);
  });
});
