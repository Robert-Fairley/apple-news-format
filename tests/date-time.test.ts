import { expect } from "chai";
import { describe, it } from "mocha";

import { DateTime } from "../src/primitives/date-time";

describe("DateTime: Validation Lambda", () => {

  it("Should return the valid date-time string", (done: MochaDone) => {

    const validStrs: string[] = [
      "2019-04-20T11:11:11Z",
      "2019-11-26T12:00:00+05:00",
      "2019-12-25T00:00:00-04:00",
    ];

    for (const str of validStrs) {
      expect(DateTime(str)).to.equal(str);
    }

    done();
  });

  it("Should return undefined when passed an invalid string", (done: MochaDone) => {

    const invalidStrs: string[] = [
      "20190416",
      "2019/25/11",
      "2020-5-16T16:00:00",
      "2021-10-12T20:16Z",
      "hello world",
    ];

    for (const str of invalidStrs) {
      expect(DateTime(str)).to.equal(undefined);
    }

    done();
  });
});
