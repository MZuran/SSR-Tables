import React, { useState, useContext, useEffect } from 'react';
import classAbilities from '@/utils/classAbilities';
import { Form, Button } from 'react-bootstrap';

import { ClassContext } from '@/context/classContext';
import { binaryToHex, binaryArray, hexToBinary } from '@/utils/hexAndBinaryFunctions';
import { splitCommaString, joinToCommaString } from '@/utils/splitCommaStrings';
import { getAbilityMacroName } from '@/utils/classAbilitiesMacro';

const abilityIndex = {
    FE6: [34, 35, 36, 37],
    FE7: [38, 39, 40, 41],
    FE8: [38],
};

function returnAbilities(context, game) {
    return abilityIndex[game].map(
        column => splitCommaString(context.tableData[game])[column]
    );
}

function returnAbilitiesArray(context, game) {
    if (game === 'FE8') {
        const abilitiesStr = returnAbilities(context, game)[0];
        const activeMacros = abilitiesStr.split('|').map(s => s.trim()).filter(Boolean);

        const allLabels = classAbilities[game].flat();
        const flags = allLabels.map(label =>
            activeMacros.includes(getAbilityMacroName(label, game)) ? 1 : 0
        );
        return [flags]; // Wrap in array to keep structure compatible
    }

    return returnAbilities(context, game).map(
        hex => binaryArray(hexToBinary(hex))
    );
}


function ClassAbilitiesForm({ game }) {
    const { classContextUpdateNumber, classContextData, updateClassContext } = useContext(ClassContext);

    const [abilities, setAbilities] = useState([]);

    useEffect(() => {
        const abilityArrays = returnAbilitiesArray(classContextData, game);
        setAbilities(abilityArrays);
    }, [classContextUpdateNumber, game]);

    const handleCheckboxChange = (setIndex, bitIndex) => {
        if (game !== "FE8") {
            const newAbilities = [...abilities];
            const updatedSet = [...newAbilities[setIndex]];
            updatedSet[bitIndex] = updatedSet[bitIndex] === 0 ? 1 : 0;
            newAbilities[setIndex] = updatedSet;
            setAbilities(newAbilities);
        } else {
            // Flatten all checkboxes into one bit array (single column)
            const totalCheckboxes = classAbilities[game].flat();
            const flatIndex = setIndex * 8 + bitIndex;

            const updated = [...abilities[0]]; // FE8 only has one array
            updated[flatIndex] = updated[flatIndex] === 0 ? 1 : 0;

            const selectedLabels = totalCheckboxes.filter((_, i) => updated[i] === 1);
            const selectedMacros = selectedLabels
                .map(label => getAbilityMacroName(label, game))
                .filter(Boolean);

            setAbilities([[...updated]]); // Single-column update
        }
    };



    const handleClickUpdate = () => {
    const newContext = { ...classContextData };
    const tableData = splitCommaString(newContext.tableData[game]);
    const indices = abilityIndex[game];

    if (game === 'FE8') {
        // Flatten all labels and match against flat ability[0]
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
            <Form className='d-flex flex-wrap'>
                {classAbilities[game].map((abilitySet, setIndex) => (
                    <div key={setIndex} className='outline mb-0'>
                        <p className='checkbox' style={{ marginTop: "0" }}>
                            Ability {setIndex + 1}
                        </p>
                        {abilitySet.map((ability, bitIndex) => (
                            <Form.Check
                                key={`${setIndex}-${game}-${bitIndex}`}
                                type="checkbox"
                                label={ability}
                                checked={
                                    game === "FE8"
                                        ? abilities[0]?.[setIndex * 8 + bitIndex] === 1
                                        : abilities[setIndex]?.[7 - bitIndex] === 1
                                }
                                onChange={() =>
                                    game === "FE8"
                                        ? handleCheckboxChange(setIndex, bitIndex)
                                        : handleCheckboxChange(setIndex, 7 - bitIndex)
                                }
                                className="checkbox"
                                style={{ width: "14rem" }}
                            />

                        ))}
                    </div>
                ))}
            </Form>
            <Button className='button-style' style={{ marginLeft: "1rem" }} onClick={handleClickUpdate}>
                Update
            </Button>
        </>
    );
}

export default ClassAbilitiesForm;
