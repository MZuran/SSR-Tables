import React from 'react'
import { useContext } from 'react'
import { ClassContext } from '@/context/classContext'
import CodeBlock from '../codeBlock'

function UnpromotedFileList({ filePath }) {

    const { classContextData } = useContext(ClassContext)
    const classPointer = classContextData.classObject["Class Pointer"]

    return (
        <div>
            <hr />
            <h5>Setting Unpromoted State</h5>
            <small className="text-muted wrap-container"><em>{filePath[0]}<br />{filePath[1]}<br />{filePath[2]}</em></small>
            <CodeBlock className={"mt-3"} copyContent={`BYTE ${classPointer}`}>
                // unpromoted classes<br/>
                ...<br/>
                BYTE {classPointer}
            </CodeBlock>
        </div>
    )
}

export default UnpromotedFileList
