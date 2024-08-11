import { test, expect, describe } from "vitest";
import {
  protocolChecker,
  domainName,
  toLower,
  normalizeURL,
  getURLsFromHTML,
} from "./crawl";

describe("Test for crawl.js", () => {
  test("Protocol checker", () => {
    const input = "https://blog.boot.dev/path/";
    const actual = protocolChecker(input);
    const expected = "https:";
    expect(actual).toEqual(expected);
  });

  test("Domain name checker", () => {
    const input = "https://blog.boot.dev/path/";
    const actual = domainName(input);
    const expected = "blog.boot.dev";
    expect(actual).toEqual(expected);
  });

  test("Text format checker", () => {
    const input = "https://blog.boot.dev/path/";
    const actual = toLower(input);
    const expected = "https://blog.boot.dev/path/";
    expect(actual).toEqual(expected);
  });

  test("Normalize host and path name", () => {
    const input = "https://blog.boot.dev/path/";
    const actual = normalizeURL(input);
    const expected = "blog.boot.dev/path/";
    expect(actual).toEqual(expected);
  });

  test("Get url from HTML ", () => {
    const inputHtml = `<html>
                        <body>
                            <a href="https://blog.boot.dev"><span>Go to Boot.dev</span></a>
                        </body>
                    </html>`;
    const inputBaseUrl = "https://blog.boot.dev";
    const actual = getURLsFromHTML(inputHtml, inputBaseUrl);
    const expected = ["https://blog.boot.dev/"];
    expect(actual).toEqual(expected);
  });
});
