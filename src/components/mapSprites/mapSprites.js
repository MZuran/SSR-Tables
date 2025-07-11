import React from 'react'
import MapSpriteForm from './mapSpriteForm'
import FolderStructure from './folderStructure'

import { Accordion } from 'react-bootstrap'

import { useState, useContext } from 'react'
import { ClassContext } from '@/context/classContext'

import CodeBlock from '../codeBlock'

function MapSprites({ filePath }) {

    const [data, setData] = useState(null)
    const classTable = useContext(ClassContext).classContextData.classObject["Class Pointer"]
    const smsPointer = useContext(ClassContext).classContextData.classObject["Standing Map Anims"]

    return (
        <div className='component-container'>
            <h5>Map Sprite References</h5>
            <small className="text-muted wrap-container"><em>{filePath}</em></small>
            <MapSpriteForm onUpdate={setData} />

            {data &&
                <>
                    <hr />
                    <FolderStructure SMSName={data.smsFileName} MMSName={data.mmsFileName} />
                    <hr />
                    <h5>List additions</h5>
                    <Accordion /* defaultActiveKey="0" */>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>SMS Id definition</Accordion.Header>
                            <Accordion.Body>
                                <small className="text-muted wrap-container">
                                    <em>
                                        First element of this list: <br /> #define Angel_F_Unknownstand 128
                                    </em>
                                </small>
                                <CodeBlock> #define {data.smsFileName} {data.smsNumber} </CodeBlock>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>MMS Id definition</Accordion.Header>
                            <Accordion.Body>
                                <small className="text-muted wrap-container">
                                    <em>
                                        First element of this list: <br /> #define Arcanist_U_Unfinished_Norikinswalk 127
                                    </em>
                                </small>
                                <CodeBlock> #define {data.mmsFileName} {data.mmsNumber} </CodeBlock>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Class' Map Sprite definition</Accordion.Header>
                            <Accordion.Body>
                                <small className="text-muted wrap-container">
                                    <em>
                                        First element of this list: <br /> #define AlmT1 (AlmFighter_M_Norikinswalk+1)
                                    </em>
                                </small>
                                <CodeBlock> #define {classTable} ({data.mmsFileName}+1) </CodeBlock>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Class' Animation Pointer Definition</Accordion.Header>
                            <Accordion.Body>
                                <small className="text-muted wrap-container">
                                    <em>
                                        First element of this list: <br /> #define Alm_T1SMS AlmFighter_M_Norikinsstand
                                    </em>
                                </small>
                                <CodeBlock> #define {smsPointer} {data.smsFileName} </CodeBlock>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Set SMS function</Accordion.Header>
                            <Accordion.Body>
                                <small className="text-muted wrap-container">
                                    <em>
                                        First element of this list: <br /> SetSMS(AlmFighter_M_Norikinsstand, 1, AlmFighter_M_Norikinsstand_Data)
                                    </em>
                                </small>
                                <CodeBlock> SetSMS({data.smsFileName}, {data.size}, {data.smsFileName}_Data) </CodeBlock>
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Set MMS function</Accordion.Header>
                            <Accordion.Body>
                                <small className="text-muted wrap-container">
                                    <em>
                                        First element of this list: <br /> SetMMS(AlmFighter_M_Norikinswalk, AlmFighter_M_Norikinswalk_Data, DemonKingAP)
                                    </em>
                                </small>
                                <CodeBlock> SetMMS({data.mmsFileName}, {data.mmsFileName}_Data, DemonKingAP) </CodeBlock>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </>

            }

        </div>
    )
}

export default MapSprites
