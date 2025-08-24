import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap'

import { useContext } from 'react'
import { ClassContext } from '@/context/classContext'

import CodeBlock from '../codeBlock'

const correspondingList = {
    ArmorType: "KnightList",
    HorseType: "HorseList",
    FlierType: "FlierList",
    DragonType: "DragonList",
    SwordType: "SwordList",
    MonsterType: "WyvernList"
}

function getAccordionItem(item, index) {

    const classPointer = useContext(ClassContext).classContextData.classObject["Class Pointer"]

    return (
        <Accordion.Item eventKey={index} key={index}>
            <Accordion.Header>{item}</Accordion.Header>
            <Accordion.Body>
                <CodeBlock copyContent={`BYTE ${classPointer}`}>
                    <i className='sm-1'>
                        {correspondingList[item]}: <br />
                        ... <br />
                        #ifdef AddedClasses <br />
                        ... <br />
                    </i>
                    <b>BYTE {classPointer}</b> <br />
                    <i className='sm-1'>
                        #endif <br />
                        BYTE 0 <br />
                    </i>
                </CodeBlock>
            </Accordion.Body>
        </Accordion.Item>
    )
}

function ClassTypesAccordion({ selectedTypesObject, filePaths }) {

    const [accordionItems, setAccordionItems] = useState([])
    useEffect(
        () => {
            let items = []
            for (const type in selectedTypesObject) {
                if (selectedTypesObject[type]) {
                    items.push(type)
                }
            }
            setAccordionItems(items)
        },
        [selectedTypesObject]
    )

    return (
        <>
            {accordionItems.length > 0 &&
                <>
                    <h5>Setting the effectiveness</h5>
                    <small className="text-muted wrap-container"><em>{filePaths[0]}<br />{filePaths[1]}</em></small>
                    <p className='mt-3'>
                        Since FE6 and FE7 have no <code>MonsterType</code> classes, we can use the functionality of FE6's <code>WyvernType</code> type if we want our class to be weak to FE6's non-personal S rank weapons. <br />
                        Otherwise, <code>WyvernType</code> is mostly identical to <code>DragonType</code>. FE7 has no such feature we can make use of.
                    </p>
                    <Accordion className='mt-3'>
                        {accordionItems.map(
                            (item, index) => getAccordionItem(item, index)
                        )}
                    </Accordion>
                </>
            }
        </>
    )
}

export default ClassTypesAccordion
