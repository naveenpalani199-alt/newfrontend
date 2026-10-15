// Encode each path segment separately so spaces, #, ?, and % in file names
// stay part of the path without changing its directory separators.
export function getTaskUrl(path) {
  const relativePath = String(path).replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${relativePath
    .split('/')
    .map(encodeURIComponent)
    .join('/')}`;
}
