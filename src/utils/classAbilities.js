const universalAbility1 = [
  "Mounted Aid Calc",
  "Canto",
  "Steal",
  "Thief Skill",
  "Dance (Dancer)",
  "Play (Bard)",
  "Critical Boost",
  "Ballista Access"
]

const universalAbility2 = [
  "Promoted Unit",
  "Supply",
  "Cavalry Unit Icon",
  "Wyvern Unit Icon",
  "Pegasus Unit Icon",
  "Lord Unit",
  "Female",
  "Boss"
]

const FE6Ability3 = [
  "Roy Lock",
  "Myrmidon/Swordmaster",
  "Manakete Lock",
  "Zephiel Lock",
  "Disable Unit Select",
  "Triangle Attack 1",
  "Triangle Attack 2",
  "NPC"
]

const FE7Ability3 = [
  "Weapon Lock 1",
  "Myrmidon/Swordmaster",
  "Manakete Lock",
  "Morphs",
  "Disable Unit Select",
  "Triangle Attack 1",
  "Triangle Attack 2",
  "Usage prohibited"
]

const FE8Ability3 = [
  "Weapon Lock 1",
  "Myrmidon/Swordmaster",
  "Monster Weapons",
  "Max Level 10",
  "Disable Unit Select",
  "Triangle Attack 1",
  "Triangle Attack 2",
  "NPC"
]

const FE6Ability4 = [
  "Disable Exp Gain",
  "??",
  "??",
  "??",
  "??",
  "??",
  "??",
  "??"
]

const FE7Ability4 = [
  "Disable Exp Gain",
  "Silencer/Lethality",
  "Magic Seal",
  "Droppable Item",
  "Eliwood Lock",
  "Hector Lock",
  "Lyndis Lock",
  "Athos Lock"
]

const FE8Ability4 = [
  "Do Not Grant Exp",
  "Silencer/Lethality",
  "Magic Seal",
  "Summoning",
  "Eirika Lock",
  "Ephraim Lock",
  "Lyn Lock (Unused)",
  "Athos Lock (Unused)"
]

const classAbilities = {
  FE6: [universalAbility1, universalAbility2, FE6Ability3, FE6Ability4],
  FE7: [universalAbility1, universalAbility2, FE7Ability3, FE7Ability4],
  FE8: [universalAbility1, universalAbility2, FE8Ability3, FE8Ability4],
}

export default classAbilities