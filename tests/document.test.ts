import { expect } from "chai";
import { describe, it } from "mocha";
import { join } from "path";
import { typecheck } from "./utils/typecheck";

describe("Apple News Document type checking", () => {
  it("Should pass with a valid document", () => {
    const errors = typecheck(join(__dirname, "documents/valid.ts"));
    expect(errors.length).to.equal(0);
  }).timeout(5000);

  it("Should fail with an invalid document", () => {
    const errors = typecheck(join(__dirname, "documents/invalid.ts"));
    expect(errors.length).to.equal(3);
  }).timeout(5000);
});
