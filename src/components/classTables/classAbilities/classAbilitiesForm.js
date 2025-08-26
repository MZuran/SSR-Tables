import React, { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

import { ClassContext } from '@/context/classContext';
import { getIndexOf, splitCommaString, replaceValueAtIndex } from '@/utils/splitCommaStrings';
import { skills } from '@/utils/skills/skillList';
import { FE6SRRHeader, FE7SRRHeader, FE8SRRHeader } from '@/utils/headers';

import AbilitySet from './abilitySet';

const headers = {
  FE6: FE6SRRHeader,
  FE7: FE7SRRHeader,
  FE8: FE8SRRHeader
}

function ClassAbilitiesForm({ game }) {
  const { classContextUpdateNumber, classContextData, updateClassContext } = useContext(ClassContext);
  const [selectedAbilities, setSelectedAbilities] = useState([])

  useEffect(() => {
    const index = getIndexOf(headers[game], "CharClassAbility")
    const abilityArrays = splitCommaString(classContextData.tableData[game])[index];
    setSelectedAbilities(abilityArrays.split("|"));
  }, [classContextUpdateNumber, game]);

  function handleUpdate() {
    const newAbilityString = selectedAbilities.join("|")
    const newContext = {...classContextData}
    let newTableArray = newContext.tableData[game]
    const i = getIndexOf(headers[game], "CharClassAbility")
    newTableArray = replaceValueAtIndex(newTableArray, i, newAbilityString)

    newContext.tableData[game] = newTableArray
    updateClassContext(newContext)
  }

  return (
    <>
      <div className=''>
        <Form className="d-flex flex-wrap justify-content-center" style={{ gap: "1rem" }}>
        {skills[game].map((abilitySet, setIndex) => (
          <AbilitySet
            key={`${setIndex}-ads`}
            setIndex={setIndex}
            abilitySet={abilitySet}
            game={game}
            selectedAbilities={selectedAbilities}
            setSelectedAbilities={setSelectedAbilities}
          />
        ))}
      </Form>
      <Button className='button-style' style={{marginLeft: "2rem"}} onClick={handleUpdate}>Update</Button>
      </div>
    </>
  );
}

export default ClassAbilitiesForm;
