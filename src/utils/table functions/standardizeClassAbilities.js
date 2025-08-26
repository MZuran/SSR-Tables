import { skills } from "../skills/skillList";
import { hexToBinary } from "../hexAndBinaryFunctions";

/**
 * Extracts active skill names from classObject based on hex ability flags and given skillSet.
 *
 * @param {Object} classObject - Object with properties "Ability 1" to "Ability 4" as hex strings.
 * @param {string[][]} skillSets - Array of 4 skillSet arrays corresponding to the 4 bytes.
 * @returns {string[]} Array of active skill names.
 */
function extractAbilities(classObject, skillSets) {
  const abilities = [
    hexToBinary(classObject["Ability 1"]),
    hexToBinary(classObject["Ability 2"]),
    hexToBinary(classObject["Ability 3"]),
    hexToBinary(classObject["Ability 4"]),
  ];

  const activeSkills = [];

  for (let i = 0; i < 4; i++) {
    const binary = abilities[i].padStart(8, "0");
    const skillSet = skillSets[i];

    for (let bit = 0; bit < 8; bit++) {
      if (binary[7 - bit] === "1") {
        activeSkills.push(skillSet[bit] || `UnknownSkill${i}-${bit}`);
      }
    }
  }

  return activeSkills;
}

/**
 * Adds a new property `abilitiesString` to classObject, containing resolved skill arrays
 * for each of FE6, FE7, and FE8 based on bit flags.
 *
 * @param {Object} classObject - Object with hex ability strings.
 * @returns {Object} Same object with added `abilitiesString` object.
 */
export default function standardizeClassAbilities(classObject) {
  classObject.abilitiesString = {
    FE6: extractAbilities(classObject, skills.FE6).join("|"),
    FE7: extractAbilities(classObject, skills.FE7).join("|"),
    FE8: extractAbilities(classObject, skills.FE8).join("|")
  };
  return classObject;
}