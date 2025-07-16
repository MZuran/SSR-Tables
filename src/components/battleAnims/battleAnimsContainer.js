import React from 'react'

import ClassPointerArrayFile from './classPointerArray'
import RenamingScriptContainer from './renamingScriptContainer'
import BattleAnimationFolder from './animationFolder'
import DefinitionsScriptContainer from './definitionsScriptContainer'
import AnimationsEventContainer from './animationsEventContainer'

function BattleAnimsContainer({ filePath }) {
    return (
        <div className='component-container'>
            <h4>Battle Animations</h4>
            <p>
                Perform  the following series of steps in the order they're presented in.<br/>
                Each section has its own path towards the relevant directory or file under its title.
            </p>
            <BattleAnimationFolder filePath={filePath.animsFolder} />
            <RenamingScriptContainer filePath={filePath.renamingScriptLocation} />
            <ClassPointerArrayFile filePath={filePath.arrayLocation} />
            <DefinitionsScriptContainer filePath={filePath.definitionsScriptLocation}/>
            <AnimationsEventContainer filePath={filePath.pointersLocation}/>
        </div>
    )
}

export default BattleAnimsContainer
