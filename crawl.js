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
