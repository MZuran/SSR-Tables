import React, { useState, useContext } from 'react'
import { Dropdown, Button, DropdownButton } from 'react-bootstrap'

import { ClassContext } from '@/context/classContext'
import { headersObject } from '@/utils/headers'
import { movementCostsReferences } from '@/utils/movementCosts'
import { replaceValueAtIndex, getIndexOf } from '@/utils/splitCommaStrings'

const indexes = {
    FE6: {
        normal: getIndexOf(headersObject.parsed.FE6, "Movement Cost"),
        rain: getIndexOf(headersObject.parsed.FE6, "Movement Cost"),
        snow: getIndexOf(headersObject.parsed.FE6, "Movement Cost")
    },
    FE7: {
        normal: getIndexOf(headersObject.parsed.FE7, "Movement Cost"),
        rain: getIndexOf(headersObject.parsed.FE7, "Movement Cost Rain"),
        snow: getIndexOf(headersObject.parsed.FE7, "Movement Cost Snow")
    },
    FE8: {
        normal: getIndexOf(headersObject.parsed.FE8, "Movement Cost"),
        rain: getIndexOf(headersObject.parsed.FE8, "Movement Cost Rain"),
        snow: getIndexOf(headersObject.parsed.FE8, "Movement Cost Snow")
    }
}

function MovementCostForm() {
    const { classContextUpdateNumber, classContextData, updateClassContext } = useContext(ClassContext)

    const [movCost, setMovCost] = useState("DefaultMovCost")

    const movementCostsTypes = Object.keys(movementCostsReferences)

    const handleSelect = (selectedKey) => {
        setMovCost(selectedKey)
    }

    const handleClickUpdate = () => {
        const gameList = ["FE6", "FE7", "FE8"]
        const newContext = { ...classContextData }

        gameList.forEach((game) => {
            let tableString = newContext.tableData[game]
            tableString = replaceValueAtIndex(tableString, indexes[game].normal, movementCostsReferences[movCost].normal)
            newContext.tableData[game] = tableString
            if (game == "FE6") { return }
            tableString = replaceValueAtIndex(tableString, indexes[game].rain, movementCostsReferences[movCost].rain)
            tableString = replaceValueAtIndex(tableString, indexes[game].snow, movementCostsReferences[movCost].snow)
            newContext.tableData[game] = tableString
        })

        updateClassContext(newContext)
    }

    return (
        <>
            <DropdownButton
                title={`${movCost}`}
                onSelect={handleSelect}
            >
                {movementCostsTypes.map((type, idx) => (
                    <Dropdown.Item key={idx} eventKey={type}>
                        {type}
                    </Dropdown.Item>
                ))}
            </DropdownButton>

            <Button className='button-style' onClick={handleClickUpdate}>
                Update
            </Button>
        </>
    )
}

export default MovementCostForm
