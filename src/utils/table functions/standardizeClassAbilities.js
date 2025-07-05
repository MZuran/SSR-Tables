import hexToBinary from "../hexToBinary";

const skillSet1 = [
  "MountedAid",
  "HasCanto",
  "Steal",
  "CanUseLockpick",
  "CanDance",
  "CanPlay",
  "CritBoost",
  "UseBallista"
];

const skillSet2 = [
  "IsPromoted",
  "IsSupply",
  "HorseIcon",
  "DragonIcon",
  "PegIcon",
  "IsLord",
  "IsFemale",
  "IsBoss"
];

const skillSet3 = [
  "UnlockLock1",
  "SwordmasterUnlock",
  "UseMonsterWeapons",
  "TraineeLevelCap",
  "CannotControl",
  "TriangleAttack",
  "TriangleAttack2",
  "DecrementIDAfterLoad"
];

const skillSet4 = [
  "GiveNoExp",
  "Lethality",
  "IsMagicSeal",
  "Summoning",
  "UnlockEirika",
  "UnlockEphraim",
  "UnlockLock3",
  "UnlockLock4"
];

/**
 * Extracts active skill names from classObject based on hex ability flags.
 *
 * @param {Object} classObject - Object with properties "Ability 1" to "Ability 4" as hex strings.
 * @returns {string[]} Array of skill names that are active (bit = 1).
 */
function getClassAbilities(classObject) {
  const abilities = [
    hexToBinary(classObject["Ability 1"]),
    hexToBinary(classObject["Ability 2"]),
    hexToBinary(classObject["Ability 3"]),
    hexToBinary(classObject["Ability 4"]),
  ];

  const allSkills = [skillSet1, skillSet2, skillSet3, skillSet4];
  const activeSkills = [];

  for (let i = 0; i < 4; i++) {
    const binary = abilities[i].padStart(8, "0"); // Ensure 8 bits
    const skillSet = allSkills[i];

    for (let bit = 0; bit < 8; bit++) {
      if (binary[7 - bit] === "1") {
        activeSkills.push(skillSet[bit]);
      }
    }
  }

  return activeSkills;
}

/**
 * Formats class abilities as a pipe-separated string or "0x00" if none,
 * and adds it to the classObject under the key "abilitiesString".
 *
 * @param {Object} classObject - Object with hex ability strings.
 * @returns {Object} The same object with an added "abilitiesString" property.
 */
export default function standardizeClassAbilities(classObject) {
  const skills = getClassAbilities(classObject);
  classObject.abilitiesString = skills.length > 0 ? skills.join("|") : "0x00";
  return classObject;
}

