import { main } from "../src/app";

describe("index", () => {
  test("Check the response is string", async done => {
    const result = await main();
    expect(result).toEqual("Hello, world!");
    done();
  });
});
