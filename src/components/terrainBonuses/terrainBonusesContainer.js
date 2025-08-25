import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ClassContext } from '@/context/classContext'

import { Button, Form } from 'react-bootstrap'
import { replaceValueAtIndex, splitCommaString } from '@/utils/splitCommaStrings'

function TerrainBonusesContainer() {

  const { classContextUpdateNumber, classContextData, updateClassContext } = useContext(ClassContext)
  const [affectedByTerrain, setAffectedByTerrain] = useState(true)
  const [label, setLabel] = useState()

  useEffect(
    () => {
      if (affectedByTerrain) {
        setLabel("Class is affected by terrain bonuses")
      } else {
        setLabel("Class is not affected by terrain bonuses")
      }
    },
    [affectedByTerrain]
  )

  function handleClickUpdate() {
    let bonusType = affectedByTerrain ? "Default" : "Flier"

    let newContext = {...classContextData}

    let FE6CSV = classContextData.tableData.FE6
    FE6CSV = replaceValueAtIndex(FE6CSV, 48, `${bonusType}Def`)
    FE6CSV = replaceValueAtIndex(FE6CSV, 49, `${bonusType}Avoid`)
    FE6CSV = replaceValueAtIndex(FE6CSV, 50, `${bonusType}Res`)
    
    let FE7CSV = classContextData.tableData.FE7
    FE7CSV = replaceValueAtIndex(FE7CSV, 54, `${bonusType}Def`)
    FE7CSV = replaceValueAtIndex(FE7CSV, 55, `${bonusType}Avoid`)
    FE7CSV = replaceValueAtIndex(FE7CSV, 56, `${bonusType}Res`)

    let FE8CSV = classContextData.tableData.FE8
    FE8CSV = replaceValueAtIndex(FE8CSV, 52, `${bonusType}Def`)
    FE8CSV = replaceValueAtIndex(FE8CSV, 51, `${bonusType}Avoid`)
    FE8CSV = replaceValueAtIndex(FE8CSV, 53, `${bonusType}Res`)

    newContext.tableData.FE6 = FE6CSV
    newContext.tableData.FE7 = FE7CSV
    newContext.tableData.FE8 = FE8CSV

    updateClassContext(newContext)
    
  }

  return (
    <div className='component-container'>
      <h5 className='mb-3'>Terrain Bonuses</h5>
      <p>
        Typically, flier classes are not affected by terrain bonuses like forests or mountains. <br />
        By default, classes will be affected by them. You can toggle this setting or on off here.
      </p>
      <hr />
      <Form.Check
        type="switch"
        label={label}
        checked={affectedByTerrain}
        onChange={() => {
          setAffectedByTerrain(!affectedByTerrain)
        }}
        className="switch-headers mt-3"
      />
      <Button className='button-style' onClick={handleClickUpdate}>
        Update
      </Button>
    </div>
  )
}

export default TerrainBonusesContainer
