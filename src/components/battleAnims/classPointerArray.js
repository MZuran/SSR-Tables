import React, { useContext } from 'react'
import CodeBlock from '../codeBlock'

import { ClassContext } from '@/context/classContext'

function ClassPointerArrayFile({ filePath }) {

    const classPointer = useContext(ClassContext).classContextData.classObject["Class Pointer"]
    const encodedClassPointer = <code>"{classPointer}"</code>

    return (
        <>
            <hr />
            <h5>Adding the class pointer to the script's array</h5>
            <small className="text-muted wrap-container"><em>{filePath}</em></small>
            <p className='mt-4'>
                Add {encodedClassPointer} as an element of the <code>primary_keywords</code> array.<br />
                This assumes the word <code>{classPointer}</code> can be used to identify the folder containing the new class' animations.
            </p>
            <CodeBlock copyButton={false}>
                <i className=''># List of primary keywords to search for in filenames<br />
                    primary_keywords = ["Egyptian", "Cantor_by", "Cantor_Jedah", ..., </i><b>"{classPointer}"</b>]
            </CodeBlock>
        </>
    )
}

export default ClassPointerArrayFile
