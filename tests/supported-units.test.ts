import { expect } from "chai";
import { describe, it } from "mocha";

import { SupportedUnits } from "../src/primitives/supported-units";

describe("SupportedUnits: Validation Lambda", () => {

  it("Should return the valid string", (done: MochaDone) => {

    const validStrs: string[] = [
      "4vmin",
      "80vw",
      "80vh",
      "6dg",
      "12cw",
      "7gut",
      "24pt",
      "10",
      "2.5",
    ];

    for (const str of validStrs) {
      expect(SupportedUnits(str)).to.equal(str);
    }

    done();
  });

  it("Should return undefined when passed an invalid string", (done: MochaDone) => {

    const invalidStrs: string[] = [
      "55px",
      "28picas",
      "dg99",
      "2em",
      "1.5rem",
    ];

    for (const str of invalidStrs) {
      expect(SupportedUnits(str)).to.equal(undefined);
    }

    done();
  });
});
