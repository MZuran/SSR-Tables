const statFields = [
  // Bases
  "HP", "Atk", "Skl", "Spd", "Def", "Res", "Con", "Mov",
  // Caps
  "HP Cap", "Atk Cap", "Skl Cap", "Spd Cap", "Def Cap", "Res Cap", "Con Cap",
  // Growths
  "HP Growth", "Atk Growth", "Skl Growth", "Spd Growth", "Def Growth", "Res Growth", "Luck Growth",
  // Promotions
  "HP Promo", "Atk Promo", "Skl Promo", "Spd Promo", "Def Promo", "Res Promo",
  // ID
  "ID"
];

export default function standardizeStats(data) {
  const converted = { ...data };

  for (const key of statFields) {
    const value = data[key];
    if (typeof value === 'string' && value.startsWith('0x')) {
      converted[key] = parseInt(value, 16);
    }
  }

  return converted;
}