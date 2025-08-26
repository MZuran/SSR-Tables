import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { ClassContext } from '@/context/classContext'

import { Button, Form } from 'react-bootstrap'
import { replaceValueAtIndex, getIndexOf } from '@/utils/splitCommaStrings'

import { FE6SRRHeader, FE7SRRHeader, FE8SRRHeader } from '@/utils/headers'

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
    FE6CSV = replaceValueAtIndex(FE6CSV, getIndexOf(FE6SRRHeader, "Def Bonus"), `${bonusType}Def`)
    FE6CSV = replaceValueAtIndex(FE6CSV, getIndexOf(FE6SRRHeader, "Avo Bonus"), `${bonusType}Avoid`)
    FE6CSV = replaceValueAtIndex(FE6CSV, getIndexOf(FE6SRRHeader, "Res Bonus"), `${bonusType}Res`)
    
    let FE7CSV = classContextData.tableData.FE7
    FE7CSV = replaceValueAtIndex(FE7CSV, getIndexOf(FE7SRRHeader, "Def Bonus"), `${bonusType}Def`)
    FE7CSV = replaceValueAtIndex(FE7CSV, getIndexOf(FE7SRRHeader, "Avo Bonus"), `${bonusType}Avoid`)
    FE7CSV = replaceValueAtIndex(FE7CSV, getIndexOf(FE7SRRHeader, "Res Bonus"), `${bonusType}Res`)

    let FE8CSV = classContextData.tableData.FE8
    FE8CSV = replaceValueAtIndex(FE8CSV, getIndexOf(FE8SRRHeader, "Def Bonus"), `${bonusType}Def`)
    FE8CSV = replaceValueAtIndex(FE8CSV, getIndexOf(FE8SRRHeader, "Avo Bonus"), `${bonusType}Avoid`)
    FE8CSV = replaceValueAtIndex(FE8CSV, getIndexOf(FE8SRRHeader, "Res Bonus"), `${bonusType}Res`)

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
