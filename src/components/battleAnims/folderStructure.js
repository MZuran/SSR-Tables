import React from 'react'
import CodeBlock from '../codeBlock'
import dedent from 'dedent'

function FolderStructure({ folderName = "yourClass", className = "" }) {

    let text = `
    Veslyquix/
    ├── ...
    └── SRR_FEGBA/
        ├── ...
        └── gfx/
            ├── ...
            └── Anims/
                ├── ${folderName}/ <-- Your class' animation folder
                └── ...
    `

    text = dedent(text)

    return (
        <CodeBlock className={className} copyButton={false}>
            {text}
        </CodeBlock>
    )
}

export default FolderStructure
