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
            │   ├── ${MMSName}.png  <- Moving Map Sprite
            │   └── ... 
            ├── SMS/
            │   ├── ${SMSName}.png  <- Standing Map Sprite
            │   └── ... 
            ├── dmp/
            │   └── ...
            ├── Installer.event                 <- Location of the lists to modify
            ├── GenerateMapSpritesInstaller.bat <- Run this script once you've placed the .png pictures inside mms and sms
            ├── Png2DmpImages.bat               <- Run this script after running the one above
            ├── Readme.md                       <- Important Information
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
            ├── GenerateMapSpritesInstaller.bat
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
