import React from 'react'
import { CopyBlock, dracula } from 'react-code-blocks'
import dedent from 'dedent'

function NameDecriptionReference({ classTable, className, classDesc, filePath, animatorName = "(Insert animator)" }) {

    let text = `
        ## ${className}
        ${classTable}[X]
        ## ${classDesc}
        A noble attached to a ruling[N]
        house. Has great potential.[N]
        Anim by ${animatorName}[X]`

    text = dedent(text)

    return (
        <div className='component-container'>
            <div className="mb-4">
                <h5>Name and Description references</h5>
                <small className="text-muted wrap-container"><em>{filePath}</em></small>
            </div>
            <p>Placeholder text taken from a generic lord.</p>
            <CopyBlock
                text={text}
                language={"text"}
                showLineNumbers={false}
                wrapLines
                theme={dracula}
                customStyle={{color: "green"}}
            />

        </div>
    )
}

export default NameDecriptionReference
