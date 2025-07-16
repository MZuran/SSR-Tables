import { splitCommaString, joinToCommaString } from '@/utils/splitCommaStrings';
import { binaryArray, hexToBinary } from '@/utils/hexAndBinaryFunctions';
import classAbilities from '@/utils/classAbilities';
import { getAbilityMacroName } from '@/utils/classAbilitiesMacro';

const abilityIndex = {
  FE6: [34, 35, 36, 37],
  FE7: [38, 39, 40, 41],
  FE8: [38],
};

export function getAbilityIndices(game) {
  return abilityIndex[game];
}

/**
 * Returns ability strings from context.tableData for the given game
 */
export function returnAbilities(context, game) {
  const indices = getAbilityIndices(game);
  return indices.map(column => splitCommaString(context.tableData[game])[column]);
}

/**
 * Returns ability arrays for checkbox states
 */
export function returnAbilitiesArray(context, game) {
  if (game === 'FE8') {
    // FE8 stores abilities as a single '|' separated macro string
    const abilitiesStr = returnAbilities(context, game)[0];
    const activeMacros = abilitiesStr.split('|').map(s => s.trim()).filter(Boolean);

    // Map all possible labels to 1 or 0 based on presence in activeMacros
    const allLabels = classAbilities[game].flat();
    const flags = allLabels.map(label =>
      activeMacros.includes(getAbilityMacroName(label, game)) ? 1 : 0
    );
    return [flags]; // Wrap in array for compatibility
  }

  // FE6 & FE7 store abilities as binary hex strings
  return returnAbilities(context, game).map(
    hex => binaryArray(hexToBinary(hex))
  );
}
