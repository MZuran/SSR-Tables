import React from 'react'
import MapSpriteForm from './mapSpriteForm'

import { Accordion } from 'react-bootstrap'

import { useState, useContext } from 'react'
import { ClassContext } from '@/context/classContext'

import CodeBlock from '../codeBlock'

import MapSpriteAccordion from './mapSpriteAccordion'

function MapSprites({ filePath }) {

    const [data, setData] = useState(null)
    const classTable = useContext(ClassContext).classContextData.classObject["Class Pointer"]
    const repoLink = "https://github.com/Klokinator/FE-Repo"

    return (
        <div className='component-container'>
            <h5>Map Sprite References</h5>
            <small className="text-muted wrap-container"><em>{filePath}</em></small>
            <p className='mt-4'>
                Map sprites for the {classTable} class can be downloaded from the <a target='_blank' href={repoLink}>Communal Fire Emblem Graphics Repository</a><br/>
                Fill the form down below to see the expected folder structure before running the scripts.<br/>
                <br/>
                After confirming you have the expected folder structure, make sure to run <code>GenerateMapSpritesInstaller.bat</code> first and then run <code>Png2DmpImages.bat</code>. <br/>
                <code>GenerateMapSpritesInstaller.bat</code> will automatically rename the files to remove special characters, no need for the user to rename them.
            </p>
            <hr/>
            <MapSpriteForm onUpdate={setData} />
            <MapSpriteAccordion data={data}/>
        </div>
    )
}

export default MapSprites
