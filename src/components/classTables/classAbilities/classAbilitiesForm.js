import React, { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

import { ClassContext } from '@/context/classContext';
import { binaryToHex } from '@/utils/hexAndBinaryFunctions';
import { splitCommaString, joinToCommaString } from '@/utils/splitCommaStrings';
import { getAbilityMacroName } from '@/utils/classAbilitiesMacro';

import { returnAbilitiesArray, getAbilityIndices } from './abilityUtils';
import classAbilities from '@/utils/classAbilities';
import AbilitySet from './abilitySet';

function ClassAbilitiesForm({ game }) {
  const { classContextUpdateNumber, classContextData, updateClassContext } =
    useContext(ClassContext);

  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    const abilityArrays = returnAbilitiesArray(classContextData, game);
    setAbilities(abilityArrays);
  }, [classContextUpdateNumber, game]);

  const handleCheckboxChange = (setIndex, bitIndex) => {
    if (game !== 'FE8') {
      const newAbilities = [...abilities];
      const updatedSet = [...newAbilities[setIndex]];
      updatedSet[bitIndex] = updatedSet[bitIndex] === 0 ? 1 : 0;
      newAbilities[setIndex] = updatedSet;
      setAbilities(newAbilities);
    } else {
      // Flatten all checkboxes into one bit array (single column)
      const totalCheckboxes = classAbilities[game].flat();
      const flatIndex = setIndex * 8 + bitIndex;

      const updated = [...abilities[0]];
      updated[flatIndex] = updated[flatIndex] === 0 ? 1 : 0;
      setAbilities([updated]);
    }
  };

  const handleClickUpdate = () => {
    const newContext = { ...classContextData };
    const tableData = splitCommaString(newContext.tableData[game]);
    const indices = getAbilityIndices(game);

    if (game === 'FE8') {
      const allLabels = classAbilities[game].flat();
      const selectedMacros = allLabels
        .filter((_, i) => abilities[0][i] === 1)
        .map(label => getAbilityMacroName(label, game))
        .filter(Boolean);

      tableData[indices[0]] = selectedMacros.join('|');
    } else {
      indices.forEach((columnIndex, i) => {
        tableData[columnIndex] = binaryToHex(abilities[i].join(''));
      });
    }

    newContext.tableData[game] = joinToCommaString(tableData);
    updateClassContext(newContext);
  };

  return (
    <>
      <Form className="d-flex flex-wrap">
        {classAbilities[game].map((abilitySet, setIndex) => (
          <AbilitySet
            key={setIndex}
            abilities={abilities}
            abilitySet={abilitySet}
            game={game}
            setIndex={setIndex}
            onCheckboxChange={handleCheckboxChange}
          />
        ))}
      </Form>
      <Button
        className="button-style"
        style={{ marginLeft: '1rem' }}
        onClick={handleClickUpdate}
      >
        Update
      </Button>
    </>
  );
}

export default ClassAbilitiesForm;
