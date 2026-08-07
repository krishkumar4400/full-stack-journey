function sanitizeFileName(originalName) {
  return originalName
    .toLowerCase() //  // make lowercase
    .replace(/\s+/g, "-") // // replace spaces with dashes
    .replace(/[^a-z0-9.-]/g, ""); //  // remove special chars except . and -
}

module.exports = {
  sanitizeFileName,
};
