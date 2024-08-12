import { JSDOM } from "jsdom";

export async function crawlsPage(currentURL) {
  console.log(`actively crawling: ${currentURL}`);
  try {
    const resp = await fetch(currentURL);
    const status = resp.status; // Corrected from resp.status()
    const contentType = resp.headers.get("content-type"); // Corrected from resp.contentType()
    const htmlBody = await resp.text();
    if (status >= 400) {
      console.log(status);
    }
    if (!contentType.includes("text/html")) {
      console.log(`content type is not HTML`);
    }

    console.log(htmlBody);
  } catch (error) {
    console.log(`error in fetch: ${error.message}, on page: ${currentURL}`);
  }
}

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

export function getURLsFromHTML(htmlBody) {
  const urls = [];
  const dom = new JSDOM(htmlBody);
  const linkElements = dom.window.document.querySelectorAll("a");
  for (const element of linkElements) {
    urls.push(element.href);
  }
  return urls;
}
