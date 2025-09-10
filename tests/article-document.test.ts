import { expect } from "chai";
import { describe, it } from "mocha";
import { ArticleDocumentIdentifier } from "../src/article-document";

describe("ArticleDocumentIdentifier", () => {
  it("should accept simple alphanumeric identifiers", () => {
    expect(ArticleDocumentIdentifier("abc123")).to.equal("abc123");
    expect(ArticleDocumentIdentifier("A1B2C3")).to.equal("A1B2C3");
  });

  it("should accept identifiers with dash and underscore", () => {
    expect(ArticleDocumentIdentifier("abc-123")).to.equal("abc-123");
    expect(ArticleDocumentIdentifier("file_name")).to.equal("file_name");
  });

  it("should reject empty string", () => {
    expect(ArticleDocumentIdentifier("")).to.be.undefined;
  });

  it("should reject identifiers longer than 64 characters", () => {
    const longId = "a".repeat(65);
    expect(ArticleDocumentIdentifier(longId)).to.be.undefined;
  });

  it("should reject identifiers with invalid characters", () => {
    expect(ArticleDocumentIdentifier("abc 123")).to.be.undefined; // space
    expect(ArticleDocumentIdentifier("abc$123")).to.be.undefined; // special char
    expect(ArticleDocumentIdentifier("🔥id")).to.be.undefined;     // emoji
  });

  it("should accept identifiers exactly 64 characters long", () => {
    const id = "a".repeat(64);
    expect(ArticleDocumentIdentifier(id)).to.equal(id);
  });
});
