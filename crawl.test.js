import { test, expect, describe } from "vitest";
import { protocolChecker, domainName, toLower } from "./crawl";

describe("Test for crawl.js", () => {
  test("Protocol checker", () => {
    const input = "https://pornhub.com/frEtzestavillo/weBcrawlerhttp";
    const actual = protocolChecker(input);
    const expected = "https:";
    expect(actual).toEqual(expected);
  });

  test("Domain name checker", () => {
    const input = "https://pornhub.com/frEtzestavillo/weBcrawlerhttp";
    const actual = domainName(input);
    const expected = "pornhub.com";
    expect(actual).toEqual(expected);
  });

  test("Text format checker", () => {
    const input = "https://pornhub.com/frEtzestavillo/weBcrawlerhttp";
    const actual = toLower(input);
    const expected = "https://pornhub.com/fretzestavillo/webcrawlerhttp";
    expect(actual).toEqual(expected);
  });
});
