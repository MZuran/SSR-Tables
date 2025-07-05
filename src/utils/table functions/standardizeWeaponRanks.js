export default function standardizeWeaponRanks(data) {
  const weaponFields = [
    "Anima", "Axe", "Bow", "Dark", "Lance", "Light", "Staff", "Sword"
  ];

  const rankMap = {
    0: "NoRank",
    1: "ERank",
    31: "DRank",
    71: "CRank",
    121: "BRank",
    181: "ARank",
    255: "SRank"
  };

  const converted = { ...data };

  for (const weapon of weaponFields) {
    const value = data[weapon];
    if (typeof value === 'string' && value.startsWith('0x')) {
      const decimal = parseInt(value, 16);
      converted[weapon] = rankMap.hasOwnProperty(decimal) ? rankMap[decimal] : decimal;
    }
  }

  return converted;
}