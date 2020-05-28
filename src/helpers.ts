export const prependProtocol = (url: string) =>
  url.startsWith('http')
    ? url
    : url.startsWith('//')
    ? `http:${url}`
    : `http://${url}`;
