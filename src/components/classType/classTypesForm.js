import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useState } from 'react';

import { FE8ClassTypes } from './classTypes';
import { useContext } from 'react';
import { ClassContext } from '@/context/classContext';
import { joinToCommaString, splitCommaString } from '@/utils/splitCommaStrings';

const optionsObject = {
    ArmorType: false,
    HorseType: false,
    FlierType: false,
    DragonType: false,
    MonsterType: false,
    SwordType: false
}

function ClassTypesForm({ setter }) {
    const [selectedOptions, setSelectedOptions] = useState(optionsObject);
    const { classContextUpdateNumber, classContextData, updateClassContext } = useContext(ClassContext)

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;

        const updatedOptions = {
            ...selectedOptions,
            [name]: checked,
        };

        setSelectedOptions(updatedOptions);
    };

    function updateClickHandler() {
        if (Object.values(selectedOptions).every(value => !value) ) { return }

        const newContext = { ...classContextData };

        const FE8Table = splitCommaString(newContext.tableData.FE8)
        let typeString = ""

        for (const type in selectedOptions) {
            if (selectedOptions[type]) {
                if (typeString.length > 0) {typeString += "|"}
                typeString += `${type}`
            }
        }

        FE8Table[54] = typeString
        newContext.tableData.FE8 = joinToCommaString(FE8Table)

        updateClassContext(newContext)
        setter(selectedOptions);
        console.log(selectedOptions)
    }

    const checkboxes = Object.keys(FE8ClassTypes).map(
        classType =>
            <Form.Check
                type={'checkbox'}
                id={`classType-${classType}`}
                key={`classType-${classType}`}
                name={classType}
                label={classType}
                className='checkbox'
                onChange={handleCheckboxChange}
            />
    )

    return (
        <>
            <Form className='d-flex'>
                {checkboxes}
            </Form>
            <Button className="button-style" onClick={updateClickHandler}>Update</Button>
        </>
    )
}

export default ClassTypesForm
