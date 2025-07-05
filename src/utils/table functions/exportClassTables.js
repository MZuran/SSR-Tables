import { FE6SRRHeader, FE7SRRHeader, FE8SRRHeader } from "../headers";

// Default values for unknown fields per game
const FE6Unknowns = {
  "P56": "0x860C978",
  "P60": "0x860C9AB",
  "P64": "0x860C9DE",
  "fe6 unknown": "0x00",
  "??": "0x00"
};

const FE7Unknowns = {
  "fe7 unknown": "0x00",
};

const FE8Unknowns = {
};

/**
 * Export for given header string.
 * For FE8, replaces Ability 1-4 with abilitiesString under CharClassAbility.
 * Adds default unknown values for missing keys.
 *
 * @param {string} header - Comma-separated header columns.
 * @param {object} classObject - Object with keys from FEBuilderHeader plus abilitiesString.
 * @param {object} unknownDefaults - Object mapping unknown field names to default values.
 * @param {boolean} isFE8 - Whether to handle FE8 abilities special case.
 * @returns {string} CSV row string with values in header order.
 */
function exportForHeader(header, classObject, unknownDefaults = {}, isFE8 = false) {
  const columns = header.split(",");

  const values = columns.map((col) => {
    const key = col.trim();

    if (isFE8 && key === "CharClassAbility") {
      return classObject.abilitiesString;
    }

    if (key in classObject) {
      return classObject[key];
    }

    // Use unknown defaults if specified
    if (key in unknownDefaults) {
      return unknownDefaults[key];
    }

    // If no value found, use empty string
    return "";
  });

  return values.join(",");
}

export function exportObjectForFE6(classObject) {
  return exportForHeader(FE6SRRHeader, classObject, FE6Unknowns, false);
}

export function exportObjectForFE7(classObject) {
  return exportForHeader(FE7SRRHeader, classObject, FE7Unknowns, false);
}

export function exportObjectForFE8(classObject) {
  return exportForHeader(FE8SRRHeader, classObject, FE8Unknowns, true);
}
