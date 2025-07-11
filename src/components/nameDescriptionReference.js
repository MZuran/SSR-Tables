import React, { useContext } from 'react'
import dedent from 'dedent'
import { ClassContext } from '@/context/classContext'
import CodeBlock from './codeBlock'

function NameDecriptionReference({ filePath, animatorName = "(Insert animator)" }) {

    const data = useContext(ClassContext).classContextData

    const classTable = data.classObject["Class Pointer"]
    const className = data.classObject.Name
    const classDesc = data.classObject.Description

    let text =
        `
        ## ${className}
        ${classTable}[X]
        ## ${classDesc}
        A noble attached to a ruling[N]
        house.Has great potential.[N]
        Anim by ${animatorName} [X]`

    text = dedent(text)

    return (
        <div className='component-container'>
            <div className="mb-4">
                <h5>Name and Description references</h5>
                <small className="text-muted wrap-container"><em>{filePath}</em></small>
            </div>
            <p>Placeholder text taken from a generic lord.</p>
            <CodeBlock>{text}</CodeBlock>

        </div>
    )
}

export default NameDecriptionReference
