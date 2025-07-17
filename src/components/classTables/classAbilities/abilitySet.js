import React from 'react';
import { Form } from 'react-bootstrap';

export default function AbilitySet({ abilities, abilitySet, game, setIndex, onCheckboxChange }) {
  return (
    <div className="outline">
      <p className="checkbox" style={{ marginTop: 0 }}>
        Ability {setIndex + 1}
      </p>
      {abilitySet.map((ability, bitIndex) => {
        const checkboxId = `ability-${game}-${setIndex}-${bitIndex}`;

        // Determine if this box is checked
        const isChecked =
          game === 'FE8'
            ? abilities[0]?.[setIndex * 8 + bitIndex] === 1
            : abilities[setIndex]?.[7 - bitIndex] === 1;

        // Determine how to handle change
        const handleChange = () =>
          game === 'FE8'
            ? onCheckboxChange(setIndex, bitIndex)
            : onCheckboxChange(setIndex, 7 - bitIndex);

        return (
          <Form.Check
            key={checkboxId}
            type="checkbox"
            id={checkboxId}
            label={ability}
            checked={isChecked}
            onChange={handleChange}
            className="checkbox"
            style={{ width: '14rem' }}
          />
        );
      })}
    </div>
  );
}
