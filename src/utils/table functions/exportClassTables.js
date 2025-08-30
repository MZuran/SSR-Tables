import { FE6SRRHeader, FE7SRRHeader, FE8SRRHeader, FE8SRRHeaderAlt } from "../headers";

// Default values for unknown fields per game
const FE6Unknowns = {
  "???": "0x00",
  "??": "0x00",
  "Def Bonus": "DefaultDef",
  "Avo Bonus": "DefaultAvoid",
  "Res Bonus": "DefaultRes",
  "Default Portrait": "GenericClassCard"
};

const FE7Unknowns = {
  "???": "0x00",
  "Def Bonus": "DefaultDef",
  "Avo Bonus": "DefaultAvoid",
  "Res Bonus": "DefaultRes",
  "Default Portrait": "GenericClassCard"
};

const FE8Unknowns = {
  "Def Bonus": "DefaultDef",
  "Avo Bonus": "DefaultAvoid",
  "Res Bonus": "DefaultRes",
  "Default Portrait": "GenericClassCard"
};

/**
 * Export for given header string.
 * For FE8, replaces Ability 1-4 with abilitiesString under CharClassAbility.
 * Adds default unknown values for missing keys.
 *
 * @param {string} header - Comma-separated header columns.
 * @param {object} classObject - Object with keys from FEBuilderHeader plus abilitiesString.
 * @param {object} unknownDefaults - Object mapping unknown field names to default values.
 * @param {boolean} singleAbilityColumn - Whether to handle FE8 abilities special case.
 * @returns {string} CSV row string with values in header order.
 */
function exportForHeader(header, classObject, unknownDefaults = {}, singleAbilityColumn = false, game) {
  const columns = header.split(",");

  const values = columns.map((col) => {
    const key = col.trim();

    if (singleAbilityColumn && key === "CharClassAbility") {
      return classObject.abilitiesString[game];
    }

    if (key in classObject && !(key in unknownDefaults)) {
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
  return exportForHeader(FE6SRRHeader, classObject, FE6Unknowns, true, "FE6");
}

export function exportObjectForFE7(classObject) {
  return exportForHeader(FE7SRRHeader, classObject, FE7Unknowns, true, "FE7");
}

export function exportObjectForFE8(classObject) {
  return exportForHeader(FE8SRRHeader, classObject, FE8Unknowns, true, "FE8");
}

export function exportObjectForFE8Randomizer(classObject) {
  return exportForHeader(FE8SRRHeaderAlt, classObject, FE8Unknowns, false);
}
