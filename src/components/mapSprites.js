import React from 'react'
import MapSpriteForm from './mapSpriteForm'

import { useState } from 'react'

function MapSprites({ sms, filePath }) {

    const [data, setData] = useState(null)


    return (
        <div className='component-container'>
            <h5>Map Sprite References</h5>
            <small className="text-muted"><em>{filePath}</em></small>
            <MapSpriteForm onUpdate={setData}/>

            { data && 
                <>data loaded</>
            }
            
        </div>
    )
}

export default MapSprites
