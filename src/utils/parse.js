import { FE6SRRHeader, FE7SRRHeader, FE8SRRHeader, FEBuilderHeader } from "./headers";
import standardizeClassTable from "./table functions/standardizeClassTable";
import standardizeReferences from "./table functions/standardizeReferences";
import standardizeStats from "./table functions/standardizeStats";
import standardizeWeaponRanks from "./table functions/standardizeWeaponRanks";
import standardizeClassAbilities from "./table functions/standardizeClassAbilities";

const testInput = "C6 Blade Lord,0x1661,0x1662,0xC6,0x14,0xCF,0x00,0x73,0x01,0x12,0x03,0x03,0x07,0x05,0x00,0x06,0x06,0x3C,0x14,0x14,0x14,0x14,0x14,0x14,0x03,0x5A,0x2D,0x28,0x2D,0x0F,0x14,0x28,0x03,0x02,0x02,0x00,0x03,0x05,0x00,0x61,0x02,0x00,0x47,0x00,0x00,0x1F,0x00,0x00,0x00,0x00,0x015921D4,0x80B808,0x80BC59,0x80C271,0xBE44F9,0xBE453A,0xBE457B,0x00"

function parseCSVLineToObject(dataStr, headerStr = FEBuilderHeader) {
  const headers = headerStr.split(',').map(h => h.trim());
  const values = dataStr.split(',').map(v => v.trim());

  const result = {};

  headers.forEach((header, index) => {
    result[header] = values[index] !== undefined ? values[index] : null;
  });

  return result;
}

export function getParsedCSVObject(input) {
  let obj
  obj = parseCSVLineToObject(input)
  obj = standardizeClassTable(obj)
  obj = standardizeReferences(obj)
  obj = standardizeStats(obj)
  obj = standardizeWeaponRanks(obj)
  obj = standardizeClassAbilities(obj)
  return obj;
}

export const bladeLordObject = getParsedCSVObject(testInput)