import React from 'react'

function RenamingScriptContainer({ filePath }) {
    return (
        <>
            <hr />
            <h5>Standardizing directories</h5>
            <small className="text-muted wrap-container"><em>{filePath}</em></small>
            <p className='mt-4'>
                <code>RenameFolders.cmd</code> removes most special characters from the folders and filenames.
                <br/>
                Scripting issues may cause you to need to run the scripts a few times, just to be safe.
            </p>
        </>
    )
}

export default RenamingScriptContainer
