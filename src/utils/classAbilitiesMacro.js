/**
 * Maps readable ability names to their corresponding macro definition names.
 *
 * @param {string} label - The ability label (e.g., "Mounted Aid Calc").
 * @param {"FE6"|"FE7"|"FE8"} game - The game version for game-specific labels.
 * @returns {string | undefined} The macro name (e.g., "MountedAid") or undefined if not found.
 */
export function getAbilityMacroName(label, game) {
  const baseMap = {
    "Mounted Aid Calc": "MountedAid",
    "Canto": "HasCanto",
    "Steal": "Steal",
    "Thief Skill": "CanUseLockpick",
    "Dance (Dancer)": "CanDance",
    "Play (Bard)": "CanPlay",
    "Critical Boost": "CritBoost",
    "Ballista Access": "UseBallista",

    "Promoted Unit": "IsPromoted",
    "Supply": "IsSupply",
    "Cavalry Unit Icon": "HorseIcon",
    "Wyvern Unit Icon": "DragonIcon",
    "Pegasus Unit Icon": "PegIcon",
    "Lord Unit": "IsLord",
    "Female": "IsFemale",
    "Boss": "IsBoss",

    "Disable Unit Select": "CannotControl",
    "Triangle Attack 1": "TriangleAttack",
    "Triangle Attack 2": "TriangleAttack2",
    "NPC": "DecrementIDAfterLoad",
    "Usage prohibited": "DecrementIDAfterLoad",

    "Disable Exp Gain": "GiveNoExp",
    "Do Not Grant Exp": "GiveNoExp",
    "Silencer/Lethality": "Lethality",
    "Magic Seal": "IsMagicSeal",
  };

  const gameSpecificMap = {
    FE6: {
      "Roy Lock": "UnlockLock1",
      "Myrmidon/Swordmaster": "SwordmasterUnlock",
      "Manakete Lock": "UseMonsterWeapons",
      "Zephiel Lock": "UnlockLock1", // No exact match, choose best fit or create new
    },
    FE7: {
      "Weapon Lock 1": "UnlockLock1",
      "Myrmidon/Swordmaster": "SwordmasterUnlock",
      "Manakete Lock": "UseMonsterWeapons",
      "Morphs": "Morph",
      "Droppable Item": "DropLastItem",
      "Eliwood Lock": "UnlockEliwood",
      "Hector Lock": "UnlockHector",
      "Lyndis Lock": "UnlockLyn",
      "Athos Lock": "UnlockAthos",
    },
    FE8: {
      "Weapon Lock 1": "UnlockLock1",
      "Myrmidon/Swordmaster": "SwordmasterUnlock",
      "Monster Weapons": "UseMonsterWeapons",
      "Max Level 10": "TraineeLevelCap",
      "Summoning": "Summoning",
      "Eirika Lock": "UnlockEirika",
      "Ephraim Lock": "UnlockEphraim",
      "Lyn Lock (Unused)": "UnlockLock3",
      "Athos Lock (Unused)": "UnlockLock4",
    },
  };

  const override = gameSpecificMap[game]?.[label];
  return override ?? baseMap[label];
}
