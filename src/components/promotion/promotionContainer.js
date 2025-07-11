import React, { useState } from 'react'
import PromotionForm from './promotionForm'

function PromotionContainer({filePath}) {

    return (
        <div className='component-container'>
            <div className="mb-4">
                <h5>Promotion</h5>
                <small className="text-muted wrap-container"><em>{filePath}</em></small>
                <PromotionForm filePath={filePath} />
            </div>
        </div>
    )
}

export default PromotionContainer
