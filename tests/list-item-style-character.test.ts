import { expect } from "chai";
import { describe, it } from "mocha";

import { ListItemStyleCharacter } from "../src/styles/text-styles/list-item-style";

describe("ListItemStyleCharacter: Validation Lambda", () => {

  it("Should return the valid character", (done: Mocha.Done) => {

    const validChars: string[] = [
      "•",
      "º",
      "£",
      "$",
      "¬",
      "ƒ",
      "§",
      "†",
      "a",
      "v",
      "¿",
      "»",
    ];

    for (const char of validChars) {
      expect(ListItemStyleCharacter(char)).to.equal(char);
    }

    done();
  });

  it("Should return undefined when passed an invalid character", (done: Mocha.Done) => {

    const invalidChars: string[] = [
      "»»»",
      "40000",
      "ÔÓıÒÓıÒ◊Ú´ÔıÚÔı´ÒÓ",
      "   ",
      "  ***  ",
      "bad character string",
    ];

    for (const char of invalidChars) {
      expect(ListItemStyleCharacter(char)).to.equal(undefined);
    }

    done();
  });
});
