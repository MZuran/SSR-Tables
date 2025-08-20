const recognizedFormats = ["png", "dmp", "jpg", "jpeg", "gif", "bmp", "webp"];

export default function parseFileName(input, returnFileExtension = false) {
  let name = input;

  // Replace spaces with underscores
  name = name.replace(/ /g, "_");

  // Remove commas, parentheses, curly braces, and dashes
  name = name.replace(/[(),{}-]/g, "");

  const parts = name.split(".");
  if (parts.length > 1) {
    const ext = parts.pop();
    const lowerExt = ext.toLowerCase();

    if (recognizedFormats.includes(lowerExt)) {
      name = parts.join("_");
      if (returnFileExtension) {
        name += "." + ext;
      }
    } else {
      parts.push(ext);
      name = parts.join("_");
      if (!returnFileExtension) {
        const noExt = name.split(".")[0];
        return noExt;
      }
    }
  }

  return name;
}
