import React, { useState } from 'react';
import ClassTableCsv from './classTable';
import ClassAbilitiesForm from './classAbilities/classAbilitiesForm';
import { Collapse, Button } from 'react-bootstrap';

const gameConfigs = [
  {
    game: 'FE6',
    label: 'FE6 Table',
    filePath: 'veslyquix/SRR_FEGBA/Patches/FE6/Tables/ClassFE6Form_0060A0E8.csv',
  },
  {
    game: 'FE7',
    label: 'FE7 Table',
    filePath: 'veslyquix/SRR_FEGBA/Patches/FE7/Tables/ClassFE7Form_0060A0E8.csv',
  },
  {
    game: 'FE8R',
    label: 'FE8 Table',
    filePath: 'Vesly01/SkillSystem/tree/Randomizer_AddItems/Tables/NightmareModules/CharactersClasses/ClassTable.csv',
  },
];

function ClassTableContainer() {
  const [openForms, setOpenForms] = useState({
    FE6: false,
    FE7: false,
    FE8: false,
  });

  const toggleForm = (game) => {
    setOpenForms((prev) => ({
      ...prev,
      [game]: !prev[game],
    }));
  };

  return (
    <>
      {gameConfigs.map(({ game, label, filePath }) => (
        <div key={game} className="component-container">
          <h4>{label}</h4>
          <small className="text-muted wrap-container">
            <em>{filePath}</em>
          </small>

          <div style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
            <Button
              className='button-style'
              size="sm"
              onClick={() => toggleForm(game)}
              aria-controls={`collapse-${game}`}
              aria-expanded={openForms[game]}
            >
              {openForms[game] ? 'Hide Abilities Form' : 'Show Abilities Form'}
            </Button>
          </div>

              <hr />
          <Collapse in={openForms[game]}>
            <div id={`collapse-${game}`}>
              <ClassAbilitiesForm game={game} />
              <hr />
            </div>
          </Collapse>

          <div style={{ paddingLeft: '1rem' }}>
            <ClassTableCsv game={game} />
          </div>
        </div>
      ))}
    </>
  );
}

export default ClassTableContainer;
