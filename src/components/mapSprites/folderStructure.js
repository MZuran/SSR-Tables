import React, { useState } from 'react';
import CodeBlock from '../codeBlock';

import { Form } from 'react-bootstrap';

function FolderStructure({ SMSName, MMSName }) {
    const [showAfter, setShowAfter] = useState(false);

    const textBefore = `veslyquix/
└── SRR_FEGBA/
    ├── EventAssembler/
    │      ├── Tools/
    │      │    ├── Png2Dmp.exe
    │      │    └── ... 
    │      └── ...     
    └── gfx/
        └── MapSprites/
            ├── MMS/
            │   ├── ${MMSName}.png
            │   └── ... 
            ├── SMS/
            │   ├── ${SMSName}.png
            │   └── ... 
            ├── dmp/
            │   └── ...
            ├── Installer.event     <- Location of the lists to modify
            ├── Png2DmpImages.bat   <- You need to run this file
            ├── Readme.md           <- Important Information
            └── ...`;

    const textAfter = `veslyquix/
└── SRR_FEGBA/
    ├── EventAssembler/
    │      ├── Tools/
    │      │    ├── Png2Dmp.exe
    │      │    └── ... 
    │      └── ...     
    └── gfx/
        └── MapSprites/
            ├── MMS/
            │   ├── ${MMSName}.png
            │   └── ... 
            ├── SMS/
            │   ├── ${SMSName}.png
            │   └── ... 
            ├── dmp/
            │   ├── ${SMSName}.dmp  <- Output
            │   ├── ${MMSName}.dmp  <- Output
            │   └── ...
            ├── Installer.event
            ├── Png2DmpImages.bat
            ├── Readme.md
            └── ...`;

    return (
        <>
            <h5>Expected Folder Structure</h5>
            <Form.Check
                type="switch"
                label="Show after running Png2DmpImages.bat"
                checked={showAfter}
                onChange={() => setShowAfter(!showAfter)}
                className="mt-2 switch-headers"
            />
            <CodeBlock copyButton={false}>{showAfter ? textAfter : textBefore}</CodeBlock>
        </>
    );
}

export default FolderStructure;
