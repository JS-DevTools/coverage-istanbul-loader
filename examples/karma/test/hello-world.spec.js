import sayHello from "../src";
import { expect } from "chai";

describe("sayHello", () => {

  it('should say "hello, world" by default', () => {
    let response = sayHello();
    expect(response).to.equal("hello, world");
  });

  it("should say hello to a specific person, if specified", () => {
    let response = sayHello("Fred");
    expect(response).to.equal("hello, Fred");
  });

});
