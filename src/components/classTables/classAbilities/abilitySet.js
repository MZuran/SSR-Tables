import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

import { useContext } from 'react';
import { ClassContext } from '@/context/classContext';

export default function AbilitySet({ setIndex, abilitySet, game, selectedAbilities, setSelectedAbilities }) {

  function handleCheckboxChange(ability, event) {
    const isChecked = event.target.checked

    if (isChecked) {
      setSelectedAbilities([...selectedAbilities, ability])
    } else {
      setSelectedAbilities(selectedAbilities.filter(a => a !== ability));
    }
   console.log(selectedAbilities)
  }

  return (
    <div className="outline">
      <p className="checkbox" style={{ marginTop: 0 }}> Ability {setIndex + 1} </p>

      {
        abilitySet.map((ability, index) => {
          return (
            <Form.Check
              disabled={ability == "??"}
              type='checkbox'
              label={ability}
              name={`${ability}-${index}-${game}`}
              className='checkbox'
              key={`${ability}-${index}-${game}`}
              id={`${ability}-${index}-${game}`}
              style={{ width: "15rem" }}
              onChange={(e) => handleCheckboxChange(ability, e)}
              checked={selectedAbilities.includes(ability)}
            />
          )
        })
      }
    </div >
  );
}
