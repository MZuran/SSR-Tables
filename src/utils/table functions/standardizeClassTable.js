export default function standardizeClassTable(data) {
  const original = data["Class Pointer"];

  if (!original) return data;

  // Split on space
  const parts = original.trim().split(" ");

  // Check if first part is a hex (like "C6", "0xC6")
  const maybeHex = parts[0];
  const hexRegex = /^0x[0-9a-f]+$|^[0-9a-f]+$/i;

  let className = original;

  if (hexRegex.test(maybeHex) && parts.length > 1) {
    // Remove the hex and rejoin remaining parts
    className = parts.slice(1).join("");
  } else {
    // Just remove all spaces
    className = parts.join("");
  }

  return {
    ...data,
    "Class Pointer": className
  };
}