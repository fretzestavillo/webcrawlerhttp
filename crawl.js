import { JSDOM } from "jsdom";

export function protocolChecker(urlString) {
  const universal = new URL(urlString);
  return universal.protocol;
}

export function domainName(urlString) {
  const universal = new URL(urlString);
  return universal.hostname;
}

export function toLower(urlString) {
  return urlString.toLowerCase();
}

export function normalizeURL(urlString) {
  const urlObj = new URL(urlString);
  return `${urlObj.hostname}${urlObj.pathname}`;
}

export function getURLsFromHTML(htmlBody, baseURL) {
  const urls = [];
  const dom = new JSDOM(htmlBody);
  const linkElements = dom.window.document.querySelectorAll("a");
  for (const element of linkElements) {
    urls.push(element.href);
  }
  return urls;
}
