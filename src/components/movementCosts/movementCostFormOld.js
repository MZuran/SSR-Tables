import React, { useState, useContext } from 'react'
import { universalMovementCosts } from '@/utils/movementCosts'
import { Dropdown, Button, DropdownButton } from 'react-bootstrap'

import { ClassContext } from '@/context/classContext'

import { headersObject } from '@/utils/headers'
import { splitCommaString, joinToCommaString } from '@/utils/splitCommaStrings'

const movementCostIndex = {
    FE6: {
        default: splitCommaString(headersObject.parsed.FE6).indexOf("Movement Cost"),
        rain: splitCommaString(headersObject.parsed.FE6).indexOf("Movement Cost"),
        snow: splitCommaString(headersObject.parsed.FE6).indexOf("Movement Cost"),
    },
    FE7: {
        default: splitCommaString(headersObject.parsed.FE7).indexOf("Movement Cost"),
        rain: splitCommaString(headersObject.parsed.FE7).indexOf("Movement Cost Rain"),
        snow: splitCommaString(headersObject.parsed.FE7).indexOf("Movement Cost Snow"),
    },
    FE8: {
        default: splitCommaString(headersObject.parsed.FE8).indexOf("Movement Cost"),
        rain: splitCommaString(headersObject.parsed.FE8).indexOf("Movement Cost Rain"),
        snow: splitCommaString(headersObject.parsed.FE8).indexOf("Movement Cost Snow"),
    },
}

function MovementCostForm() {
    const { classContextUpdateNumber, classContextData, updateClassContext } = useContext(ClassContext)

    const [movCost, setMovCost] = useState("DefaultMovCost")

    const movementCostsTypes = Object.keys(universalMovementCosts)

    const handleSelect = (selectedKey) => {
        setMovCost(selectedKey)
    }

    const handleClickUpdate = () => {
        const newContext = { ...classContextData }
        const gameList = ["FE6", "FE7", "FE8"]

        gameList.forEach(game => {
            const tableData = splitCommaString(newContext.tableData[game])

            tableData[movementCostIndex[game].default] = universalMovementCosts[movCost][game].normal
            tableData[movementCostIndex[game].rain] = universalMovementCosts[movCost][game].rain
            tableData[movementCostIndex[game].snow] = universalMovementCosts[movCost][game].snow

            newContext.tableData[game] = joinToCommaString(tableData)
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
