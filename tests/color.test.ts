import { expect } from "chai";
import { describe, it } from "mocha";

import { Color } from "../src/primitives/color";

describe("Color: Validation Lambda", () => {

  it("Should return the valid color string", (done: Mocha.Done) => {

    const validStrs: string[] = [
      "#fff",
      "#3b3b3b",
      "#000000ee",
      "red",
      "lightgreen",
      "rebeccapurple",
    ];

    for (const str of validStrs) {
      expect(Color(str)).to.equal(str);
    }

    done();
  });

  it("Should return undefined when passed invalid string", (done: Mocha.Done) => {

    const invalidStrs: string[] = [
      "rgb(255,255,10)",
      "rgba(85,85,85,0.5)",
      "crimson red",
      "#0",
      "#ff",
      "#ef46d",
      "#hello",
      "#badcolorstring",
      "# ff 25 e5",
      "#26 00",
    ];

    for (const str of invalidStrs) {
      expect(Color(str)).to.equal(undefined);
    }

    done();
  });
});
