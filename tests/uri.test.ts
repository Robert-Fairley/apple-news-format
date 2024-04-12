import { expect } from "chai";
import { describe, it } from "mocha";

import { URI } from "../src/primitives/uri";

describe("URI: Validation Lambda", () => {

  it("Should return a valid string unchanged", (done: Mocha.Done) => {

    const validStrs: string[] = [
      "http://resource.site/image.jpg",
      "http://resource.site/image.jpeg",
      "https://resource-site.com/video-link.m3u8",
      "bundle://a-video.mp4",
      "bundle://localfile.png",
      "bundle://audio-file.aac",
      "bundle://voiceover.mp3",
      "https://resource-blog.site/audio/files/dist/old-lecture.ac3",
    ];

    for (const str of validStrs) {
      expect(URI(str)).to.equal(str);
    }

    done();
  });

  it("Should return undefined when passed invalid string", (done: Mocha.Done) => {

    const invalidStrs: string[] = [
      "http://bad-resource.org/image.bmp",
      "https://other-bad.resource/bad-vid.mkv",
      "badly-formed.image-str.gif",
      "incorrect-local-resource.jpg",
      "bundle://invalid-format.tiff",
      "my new house.com",
      "a boat.jpeg",
    ];

    for (const str of invalidStrs) {
      expect(URI(str)).to.equal(undefined);
    }

    done();
  });
});
