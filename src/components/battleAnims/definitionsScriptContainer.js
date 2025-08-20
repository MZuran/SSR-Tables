import React from 'react'

function DefinitionsScriptContainer({ filePath }) {
    return (
        <>
            <hr />
            <h5>Creating animation definitions</h5>
            <small className="text-muted wrap-container"><em>{filePath}</em></small>
            <p className='mt-4'>
                <code>GenerateDefinitions.bat</code> uses the previously modified python script to find and create references for each animation it's configured to manage.
                <br/>
                Run the script once.
            </p>
        </>
    )
}

export default DefinitionsScriptContainer
