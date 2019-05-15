import { expect } from "chai";
import { describe, it } from "mocha";

import { HTMLTableData } from "../src/components/tables/html-table";

describe("HTMLTableData: Validation Lambda", () => {

  it("Should return the valid string", (done: MochaDone) => {

    const validStrs: string[] = [
      "<table><thead><tr><th>Col1</th><th>Col2</th></tr></thead><tbody><tr><td>data1</td><td>data2</td></tr></tbody></table>",
      "<table>random string</table>",
      "<table><tr><td>A1</td><td>A2</td></tr><tr><td>B1</td><td>B2</td></tr></table>"
    ];

    for (const str of validStrs) {
      expect(HTMLTableData(str)).to.equal(str);
    }

    done();
  });

  it("Should return undefined if passed an invalid string", (done: MochaDone) => {

    const invalidStrs: string[] = [
      "<table>No closing tag",
      "<p>The wrong html tags</p>",
      "a bad string and all",
      "42",
    ];

    for (const str of invalidStrs) {
      expect(HTMLTableData(str)).to.equal(undefined);
    }

    done();
  });
});
