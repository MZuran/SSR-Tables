import React, { useContext } from 'react'
import { ClassContext } from '@/context/classContext'
import FolderStructure from './folderStructure'

function BattleAnimationFolder({ filePath }) {

    const repoLink = "https://github.com/Klokinator/FE-Repo"
    const classPointer = useContext(ClassContext).classContextData.classObject["Class Pointer"]

    return (
        <>
            <hr />
            <h5>Placing the battle animations in our project</h5>
            <small className="text-muted wrap-container"><em>{filePath}</em></small>
            <p className='mt-4'>
                The battle animations folder for the {classPointer} class can be downloaded from the <a target='_blank' href={repoLink}>Communal Fire Emblem Graphics Repository</a>
                <br/>
                The word {classPointer} must be included in the folder name and be <b>unique</b> from other classes.
                <br/>
                <b>Do not</b> remove credit from the original artist if you are to modify the file and directory names.
                <br/><br/>
                Place the animation folder for the {classPointer} class inside the <code>Anims/png/</code> folder
            </p>
            <FolderStructure/>
        </>
    )
}

export default BattleAnimationFolder
