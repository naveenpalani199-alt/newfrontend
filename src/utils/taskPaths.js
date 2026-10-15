// Encode each path segment separately so spaces, #, ?, and % in file names
// stay part of the path without changing its directory separators.
export function getTaskUrl(path) {
  return `/${String(path).split('/').map(encodeURIComponent).join('/')}`;
}
